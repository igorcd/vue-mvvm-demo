<template>
    <form @submit.prevent="submit" ref="form">
        <slot/>
    </form>
</template>

<script lang='ts'>
import { defineComponent, provide, ref } from 'vue';

export interface FormField {
    name: string;
    error: string;
    validation: ((value: string) => string)[];
}

const Form = defineComponent({
    setup(props, context) {
        const form = ref<HTMLFormElement | null>(null);

        // Array que armazenará a refencias para os inputs
        const fields = ref<FormField[]>([]);
       
        // Método que os inputs utilização para adicionar a sua referência ao form
        const setField = (data: FormField) => {
            fields.value.push(data);
        };

        // Método de Validação
        const validate = () => {
            // Iremos criar um FormData para capturar todos os valores que estão dentro do Form
            const formData = new FormData(form.value!);
            
            // Iremos pegar os dados através do método entries()
            for(const [key, value] of formData.entries()) {

                // Verificar se o campo é válido
                const field = fields.value.find(el => el.name == key);

                if(field) {

                    // Realizar as validações e retornar o erro
                    field.error = field.validation.reduce((acc, rule) => {

                        // Caso tenha erro, iremos adiciona-lo trancando o placeholder $NAME pelo nome do campo
                        return acc.length > 0 ? acc : rule(value.toString()).replace("$NAME", key);
                    }, "");
                }
            }

            // Verificar se existe algum campo com erro
            const isValid = fields.value.find(el => el.error.length > 0) == null;

            return isValid;
        };

        let validateOnInput = false;

        const submit = () => {
            validateOnInput = true;
            const isValid = validate();
            context.emit("submit", { isValid, erros: fields.value.filter(el => el.error.length > 0).map(el => el.error) });
        };

        // Realizar a validação ao digitar apenas após o primeiro submit        
        const onInput = () => {
            if(validateOnInput) {
                validate();
            }
        };

        // Dados providos aos elementos dentro do Slot
        provide("fields", fields);
        provide("addField", setField);
        provide("onInput", onInput);

        return { submit, form };
    }
});

export default Form;
</script>

<style>

</style>
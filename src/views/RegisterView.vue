<template>
    <div class="h-screen flex flex-col items-center justify-center">
        <h1 class="font-bold text-white text-center text-3xl sm:text-4xl mb-10">
            Registrar
        </h1>
        <Form class="w-full max-w-screen-sm m-4 flex flex-col items-center" @submit="submit">

            <Input v-model="form.name" name="nome" 
                   placeholder="Nome completo" class="mb-4" :rules="[required]"/>

            <Input v-model="form.email" name="email"
                   placeholder="Email" class="mb-4" :rules="[required, validEmail]"/>

            <Input v-model="form.cpf" name="cpf" 
                   placeholder="Cpf" class="mb-4" :rules="[required, validCpf]"/>

            <Input v-model="form.password" name="senha" 
                   placeholder="Senha" class="mb-4" :rules="[required]" type="password"/>

            <Input v-model="confirmPassword" name="confirmar senha"
                   placeholder="Confirmar senha" class="mb-10" 
                   :rules="[required, (value) => isSame(value, form.password)]" type="password"/>
                   
            <button class="h-12 w-full md:w-96 flex items-center justify-center
                           shadow-lg rounded text-gray-700 bg-white font-medium">
                Confirmar
            </button>
        </Form>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';
import Input from '@/components/Input.vue';
import Form from '@/components/Form.vue';

import { required, validEmail, validCpf, isSame } from '@/utils/validationFunctions';

const RegisterView = defineComponent({
    components: { Input, Form },
    setup(){
        const form = reactive({
            name: '',
            email: '',
            cpf: '',
            password: '',
        });

        const confirmPassword = ref('');

        const submit = (data: { isValid: boolean; errors: string[]}) => {
            if(data.isValid) {
                window.alert("Cadastro concluído!");
            }
        };

        return { form, confirmPassword, submit, required, validEmail, validCpf, isSame };
    }
});

export default RegisterView;
</script>

<style>

</style>
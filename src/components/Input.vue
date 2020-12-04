<template>
    <div class="w-full">
        <div class="w-full relative">
            <input class="h-10 rounded-md w-full border-gray-300 border px-2" v-model="handleValue" :name="name"/>
            <label class="material-input__placeholder absolute text-gray-600"
                   :class="{ '--input-focus': modelValue.length > 0 }">
                {{ placeholder }}
            </label>
        </div>
        <p>{{ error }}</p>
    </div>
</template>

<script lang='ts'>
import { defineComponent, computed, inject, Ref, onMounted, PropType } from 'vue';
import "@/assets/styles/input.css";
import { FormField } from './Form.vue';

const Input = defineComponent({
    props: {
        modelValue: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        rules: {
            type: Array as PropType<((value: string) => string)[]>,
        },
    },
    setup(props, context) {
        // Injeção dos dados providos pelo Form
        const addField = inject<(data: FormField) => null>("addField");
        const fields = inject<Ref<FormField[]>>('fields');
        const onInput = inject<() => void>('onInput');

        // Verificação se a referência para esse input possui algum erro
        const error = computed(() => fields?.value.find(el => el.name == props.name)?.error || "");

        const handleValue = computed({
            get: () => props.modelValue,
            set: (value) => {
                context.emit("update:modelValue", value);
                onInput && onInput();
            },
        });

        onMounted(() => {
            // Caso os dados sejam providos pelo form, adicionar uma referência ao Input para que os dados sejam tratados
            
            if(fields && props.rules && addField) {
                addField({ name: props.name, error: "", validation: props.rules });
            }
        });

        return { handleValue, error };
    }
});

export default Input;
</script>

<style>

</style>
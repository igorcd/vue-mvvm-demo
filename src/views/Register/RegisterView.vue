<template>
    <div class="min-h-screen flex flex-col items-center justify-center p-4">

        <Text type="header" class="text-center mb-10">
            Registrar
        </Text>
        <Form class="w-full max-w-screen-sm m-4 flex flex-col items-center" @submit="submit">
            <ImageSelector v-model="state.image" class="mb-8"/>
            <Input v-model="state.name" name="nome" 
                   placeholder="Nome completo" class="mb-4" :rules="[required]"/>

            <Input v-model="state.email" name="email"
                   placeholder="Email" class="mb-4" :rules="[required, validEmail]"/>

            <Input v-model="state.phone" name="senha" 
                   placeholder="Número de telefone" class="mb-4" :rules="[required]" type="telefone"/>

            <Input v-model="state.password" name="senha" 
                   placeholder="Senha" class="mb-4" :rules="[required]" type="password"/>

            <Input v-model="confirmPassword" name="confirmar senha"
                   placeholder="Confirmar senha" class="mb-10" 
                   :rules="[required, (value) => isSame(value, state.password)]" type="password"/>
            
            <Button class="md:w-96">
                <Transition name="fade" mode="out-in">
                    <Loading v-if="state.loading" color="#818cf8"/>
                    <Text v-else>Confirmar</Text>
                </Transition>
            </Button>
        </Form>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue';
import { required, validEmail, validCpf, isSame } from '@/utils/validationFunctions';
import { useRouter } from 'vue-router';

import Input from '@/components/Input.vue';
import Form from '@/components/Form.vue';
import ImageSelector from '@/components/ImageSelector.vue';
import Button from '@/components/Button.vue';
import Loading from '@/components/Loading.vue';
import Text from '@/components/Text.vue';

const RegisterView = defineComponent({
    components: { Input, Form, ImageSelector, Button, Loading, Text },
    setup(){

        const { replace } = useRouter();

        const router = useRouter();
        const state = reactive({
            name: '',
            email: '',
            password: '',
            image: '',
            phone: '',
            loading: false
        });


        const confirmPassword = ref('');

        const submit = (data: { isValid: boolean; errors: string[]}) => {
          
            if(data.isValid && !state.loading) {
                state.loading = true;
                setTimeout(() => {
                    replace({ name: 'phone' });
                }, 3000);
            }
        };

        const goBack = () => {
            router.go(-1);
        };

        return { state, confirmPassword, submit, required, validEmail, validCpf, isSame, goBack };
    }
});

export default RegisterView;
</script>

<style>

</style>
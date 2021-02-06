<template>
    <div class="max-w-full w-100 relative">

        <h1 class="font-bold text-white text-center text-4xl mb-2">
            Login
        </h1>
        <p class="text-white text-center opacity-75 mb-20">Acesse a sua conta para criar enquetes</p>
        <Form @submit="submit">
            <Input v-model="state.email" name="e-mail" 
                   placeholder="E-mail" class="mb-4"
                   :rules="[required]"/>
            <Input v-model="state.password" name="senha" 
                   type="password"
                   placeholder="Senha" class="mb-4"
                   :rules="[required]"/>
            <Button>Acessar</Button>
        </Form>

        <div class="w-full bg-white h-px my-4"></div>

        <div class="flex justify-center mb-10">
            <IconButton icon="facebook" size="50px" iconSize="25px" class="border border-white mx-2"/>
            <IconButton icon="google" size="50px" iconSize="25px" class="border border-white mx-2"/>
            <IconButton icon="phone" size="50px" iconSize="25px" class="border border-white mx-2"/>
        </div>

        <div class="text-center text-white font-medium hover:underline cursor-pointer" @click="$router.push({ name: 'register'})">
            Registrar
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Form from '@/components/Form.vue';
import IconButton from '@/components/IconButton.vue';
import { required } from '@/utils/validationFunctions';
import { useRouter } from 'vue-router';

const LoginView = defineComponent({
    components: { Input, Button, Form, IconButton },
    setup() {

        const { replace } = useRouter();
        
        const state = reactive({
            email: '',
            password: ''
        });

        const submit = (data: { isValid: boolean; errors: string[]}) => {
            if(data.isValid) {
                replace({ name: 'surveys' });
            }
        };

        return { state, required, submit };
    }
});

export default LoginView;
</script>

<style>

</style>
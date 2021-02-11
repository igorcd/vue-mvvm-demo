<template>
    <div class="max-w-full w-100 relative">
        <h1 class="font-bold text-white text-center text-4xl mb-2">
            Wanna Know
        </h1>
        <p class="text-white text-center opacity-75 mb-20">É só pra o Wiv mesmo ¯ \ _ (ツ) _ / ¯</p>
        <Form class="mb-16">
            <Input v-model="state.pin" name="pin" 
                   type="tel"
                   placeholder="Pin da enquete" class="mb-4"
                   :rules="[required]"/>
            <Button @click="$router.push({ name: 'survey', params: { id: 0}})">Acessar</Button>
        </Form>

        <div class="text-center text-white font-medium mb-2 hover:underline cursor-pointer" @click="$router.push({name: 'login'})">
            Acessar sua conta
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
import { required } from '@/utils/validationFunctions';

const PinView = defineComponent({
    components: { Input, Button, Form },
    setup() {
        const state = reactive({
            pin: '',
        });

        return { state, required };
    }
});

export default PinView;
</script>

<style>

</style>
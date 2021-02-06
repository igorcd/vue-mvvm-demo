<template>
    <div class="w-full min-h-screen flex items-center justify-center">
        <div class="w-full p-4 max-w-lg text-center  flex flex-col items-center">
            <img src="@/assets/icons/phone.svg" class="h-24 2xl:h-32 mb-8 2xl:mb-12"/>
            <Text type="header" class="mb-4">Confirmar telefone</Text>
            <Text type="body2" class="mb-6 2xl:mb-12">Nós enviamos uma mensagem SMS com um código de confirmação, por favor, insira-o abaixo</Text>
            <input v-mask="'######'" class="w-full mb-8 2xl:mb-14 outline-none text-white text-5xl 2xl:text-6xl text-center bg-transparent tracking-widest placeholder-gray-200" placeholder="000000"/>
            <Button class="max-w-xs mb-8">Confirmar</Button>
            <HollowButton class="mb-4">Não recebi o código</HollowButton>
            <HollowButton>Confirmar depois</HollowButton>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Text from '@/components/Text.vue';
import Button from '@/components/Button.vue';
import HollowButton from '@/components/HollowButton.vue';
import { maska } from 'maska';

const ConfirmPhoneView = defineComponent({
    directives: { 'mask': maska },
    components: { Text, Button, HollowButton }
});

export default ConfirmPhoneView;
</script>

<style>

</style>
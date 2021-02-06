<template>
    <div class="min-h-screen flex items-center justify-center relative p-4 sm:px-20">
        <!-- Imagem de fundo -->
        <img src="@/assets/img/bg.svg" class="absolute bottom-0 left-0 w-4/5 z-0 opacity-20 sm:opacity-100 sm:w-2/5 max-w-md 2xl:max-w-xl"/>

        <!-- Conteúdo -->
        <RouterView #default="{Component}">
            <Transition name="fade" mode="out-in">
                <component :is="Component"/>
            </Transition>
        </RouterView>
        
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const LoginView = defineComponent({

});

export default LoginView;
</script>

<style>

</style>
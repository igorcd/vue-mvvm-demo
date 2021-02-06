<template>
    <button class="h-12 w-full flex items-center justify-center shadow-lg rounded text-gray-700 bg-white font-medium transform active:scale-90 transition-all duration-300 focus:outline-none">
        <slot/>
    </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Button = defineComponent({
});

export default Button;
</script>

<style>

</style>
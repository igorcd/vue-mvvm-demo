<template>
    <div class="text-center select-none text-white font-medium hover:underline cursor-pointer transform active:scale-95 transition-transform duration-300" @click="$emit('pressed')">
        <slot/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const HollowButton = defineComponent({
});

export default HollowButton;
</script>

<style>

</style>
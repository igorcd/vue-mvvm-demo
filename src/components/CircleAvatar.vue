<template>
    <div class="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover bg-gray-100" :style="{'background-image': `url(${image})`}"></div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const CircleAvatar = defineComponent({
    props: {
        image: {
            type: String,
            required: true
        }
    }
});

export default CircleAvatar;
</script>

<style>

</style>
<template>
    <div class="h-screen flex items-center justify-center px-8 py-12" :id="index">
        
        <div class="w-full max-w-screen-lg h-full sm:h-4/6">
            <div class="w-full h-full dark:bg-gray-600 bg-white shadow-2xl rounded-xl relative flex flex-col items-center justify-center">
                <p class="absolute bottom-3 right-4 text-sm text-gray-300">Desenvolvendo uma Aplicação Realtime com o Firebase</p>
                <slot/>
            </div>
            <div class="flex items-center justify-end mt-2">
                <IconButton icon="up" color="white" size="40px" iconSize="40px" v-if="index > 0" @pressed="$router.replace({ hash: `#${index - 1}`})"/>
                <IconButton icon="down" color="white" size="40px" iconSize="40px" @pressed="$router.replace({ hash: `#${index + 1}`})"/>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import IconButton from '@/components/IconButton.vue';

const Slide = defineComponent({
    components: { IconButton },
    props: {
        index: {
            type: Number,
            required: true
        }
    }
});

export default Slide;
</script>

<style>

</style>
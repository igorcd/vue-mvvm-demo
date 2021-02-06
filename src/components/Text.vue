<template>
    <p :class="textClass"><slot/></p>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue';

const Text = defineComponent({
    props: {
        type: {
            type: String as PropType<'header' | 'subheader' | 'body' | 'body2' | 'button' | 'caption'>,
            default: 'body'
        }
    },
    setup(props) {
        const textClass = computed(() => {
            switch (props.type) {
                case 'header':
                    return 'font-bold  text-3xl sm:text-4xl text-white';
                case 'subheader':
                    return 'text-xl text-white';
                case 'button':
                    return 'font-medium text-gray-800';
                case 'body2':
                    return 'text-white';
                case 'caption':
                    return 'text-white text-sm';
                default:
                    return 'text-gray-800';
            }
        });

        return { textClass };
    }
});

export default Text;
</script>

<style>

</style>
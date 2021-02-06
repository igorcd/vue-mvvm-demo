<template>
    <textarea rows="1"
              ref="textArea"
              class="w-full light-scroll resize-none outline-none disabled:bg-transparent"
              :placeholder="$attrs['placeholder']"
              @input="onInput">
    </textarea>
</template>

<script lang='ts'>
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';

const AutoResizeTextArea = defineComponent({
    setup() {
        const textArea = ref<HTMLTextAreaElement | null>(null);
        const onInput = () => {
            const el = textArea.value!;
            el.style.height = 'auto';
          
            el.style.height = el.scrollHeight + 'px';
            el.style.overflow = 'hidden';
        };

        onMounted(() => {
            window.addEventListener('resize', onInput);
        });

        onBeforeUnmount(() => window.removeEventListener('resize', onInput));

        return { onInput, textArea };
    }
});

export default AutoResizeTextArea;
</script>

<style>

</style>
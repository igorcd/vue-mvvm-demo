<template>
    <div class="w-full h-36 sm:w-36 rounded-lg 
                border border-white flex flex-col items-center justify-center cursor-pointer 
              bg-white bg-opacity-10 hover:bg-white hover:bg-opacity-30 active:scale-90 transform  transition-all duration-200 mx-3"
         @click="$emit('pressed')">
        <Icon icon="survey" color="white" size="3rem" class="mb-4"/>
        <Text type="caption">Criar enquete</Text>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Icon from '@/components/Icon.vue';
import Text from '@/components/Text.vue';

const AddSuveyCard = defineComponent({
    components: { Icon, Text }
});

export default AddSuveyCard;
</script>

<style>

</style>
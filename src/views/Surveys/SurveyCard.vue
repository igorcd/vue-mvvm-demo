<template>
    <div class="survey-card" style="min-width: 16rem"
         @click="$emit('pressed')">
        <!-- Conteudo -->
        <div class="flex-1 p-4 flex items-center overflow-hidden overflow-ellipsis">
            <p class="text-center flex-1">{{ title }}</p>
        </div>
        <div class="h-10 border-t border-gray-300 flex-shrink-0 flex items-center px-4">
            <Icon icon="vote" color="#6d28d9" size="24px" class="mr-1 mb-1"/>
            <Text type="button">36</Text>
            <HollowButton class="text-purple-700 ml-auto">Finalizar</HollowButton>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Icon from '@/components/Icon.vue';
import Text from '@/components/Text.vue';
import HollowButton from '@/components/HollowButton.vue';

const SurveyCard = defineComponent({
    components: { Icon, Text, HollowButton },
    props: {
        title: {
            type: String,
            required: true
        }
    }
});

export default SurveyCard;
</script>

<style>

</style>
<template>
    <div class="pt-4 2xl:pt-8 pb-12">
        <div class="max-w-2xl mx-auto px-4 flex flex-col items-center">
            <Lottie animation="music" size="200px" class="-mb-8 2xl:-mb-0"/>
            <Text type="header" class="mb-8 text-center">Qual o desenvolvedor mais gatinho da Vsoft?</Text>
        
            <div class="flex items-center">
                <HollowButton>Votação</HollowButton>
                <div class="w-px h-8 mx-6 bg-white"/>
                <HollowButton>Discussão</HollowButton>
            </div>

        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Lottie from '@/components/Lottie.vue';
import Text from '@/components/Text.vue';
import HollowButton from '@/components/HollowButton.vue';

const SurveyView = defineComponent({
    components: { Lottie, Text, HollowButton }
});

export default SurveyView;
</script>

<style>

</style>
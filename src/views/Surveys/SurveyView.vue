<template>
    <div class="2xl:pt-8 pb-12">
        <div class="max-w-xl mx-auto px-4 flex flex-col items-center">

            <!-- Titulo da questão -->
            <Lottie animation="music" size="200px" class="-mb-8 2xl:-mb-0"/>
            <Text type="header" class="mb-8 text-center">Qual o desenvolvedor mais gatinho da Vsoft?</Text>
        
            <Transition name="fade" mode="out-in">

                <div class="w-full" v-if="state.showResult">
                    <Alternative v-for="n in 5" :key="n" :votes="n" :percentage="20 * n"/>
                </div>

                <div v-else class="w-full">
                    <div class="flex items-center h-16 border-b border-white" v-for="n in 5" :key="n">
                        <Radio name="survey" :radioValue="n" v-model="state.alternative"/>
                        <Text type="body2" class="px-4">Joãozinho da silva</Text>
                    </div>
                    <Button class="mt-4" @click="state.showResult = true">Votar</Button>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue';
import Lottie from '@/components/Lottie.vue';
import Text from '@/components/Text.vue';
import Alternative from './Alternative.vue';
import Radio from '@/components/Radio.vue';
import Button from '@/components/Button.vue';

const SurveyView = defineComponent({
    components: { Lottie, Text, Alternative, Radio, Button },
    setup() {
        const state = reactive({
            alternative: 0,
            showResult: false
        });

        return { state };
    }
});

export default SurveyView;
</script>

<style>

</style>
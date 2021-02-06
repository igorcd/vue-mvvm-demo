<template>
    <div class="w-full pt-5 sm:pt-10 pb-12">
        
        <div class="px-8 pb-8">
            <Text type="header" class="mb-1 w-52 sm:w-auto">Bem-vindo Joãozinho!</Text>
            <Text type="subheader">Essas são suas enquetes</Text>
        </div>

        <!-- Cards -->
        <div class="sm:flex flex-wrap px-6">
            <SurveyCard v-for="(survey, index) in surveys" :key="survey" :title="survey" @pressed="$router.push({ name: 'survey', params: {id: index}})"/>
            <AddSurveyCard @pressed="$router.push({ name: 'create'})"/>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import Text from '@/components/Text.vue';
import SurveyCard from './SurveyCard.vue';
import AddSurveyCard from './AddSurveyCard.vue';
const SurveysView = defineComponent({
    components: { SurveyCard, AddSurveyCard, Text },
    setup() {
        const surveys = ref([
            "Você mudaria sua história se pudesse?",
            "Quem foi seu herói quando criança?", 
            "O que te motiva a despertar pelas manhãs?",
            "Se pudesse mandar uma mensagem à aliens, o que perguntaria?", 
            "O que faria em um apocalipse zumbi?",
            "Qual instrumento musical gostaria de tocar?",
            "Se pudesse viver em qualquer lugar, onde seria?",
            "Qual seu filme de comédia preferido?",
            "Aceitaria uma passagem só de ida à Marte?",
            "Se pudesse, escolheria outra profissão?"]);

        return { surveys };
    }
});

export default SurveysView;
</script>

<style>

</style>
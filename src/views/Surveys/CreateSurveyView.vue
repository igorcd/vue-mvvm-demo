<template>
    <div class="min-h-screen flex flex-col items-center justify-center px-5 pt-20 pb-12">
        
        <!-- Container -->
        <div class="flex flex-col items-center w-full max-w-lg 2xl:max-w-2xl" style="min-height: 75vh">
            
            <!-- Card -->
            <div class="flex-1 bg-white shadow-lg rounded-xl flex flex-col items-stretch self-stretch mb-8">

                <!-- Card Header -->
                <div class="border-b border-gray-300 pb-3 pt-4 px-8">
                    <AutoResizeTextArea class="bg-transparent text-center text-xl font-medium" placeholder="Titulo da enquete"/>
                </div>

                <!-- Card Body -->
                <div class="flex-1 overflow-auto px-4 flex flex-col" style="min-height: 10rem">

                    <div class="w-full flex-1 flex items-center justify-center p-6" v-if="survey.questions.length == 0">
                        <p class="text-lg font-medium opacity-50 text-center">Adicione algumas perguntas ;)</p>
                    </div>

                    <div class="h-14 flex items-center border-b border-gray-300 last:border-b-0" v-for="(question, index) in survey.questions" :key="index">
                        <input placeholder="Titulo da questão" class="flex-1 outline-none" v-model="question.title">
                        <IconButton icon="times" color="#EF4444" @pressed="() => removeQuestion(index)"/>
                    </div>

                </div>

                <!-- Card Footer -->
                <div class="border-t border-gray-300 py-4">
                    <HollowButton class="text-purple-700" @pressed="addQuestion">Adicionar pergunta</HollowButton>
                </div>
            </div>

            <!-- Confirmar -->
            <div class="flex">
                <IconButton icon="times" size="3rem" iconSize="2rem" class="border border-white flex-shrink-0" @pressed="$router.replace({ name: 'surveys'})"/>
                <div class="w-8"/>
                <IconButton icon="check" size="3rem" iconSize="2rem" class="border border-white flex-shrink-0" @click="submit"/>

            </div>

        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import IconButton from '@/components/IconButton.vue';
import AutoResizeTextArea from '@/components/AutoResizeTextArea.vue';
import HollowButton from '@/components/HollowButton.vue';
import SurveyPostDTO from '@/DTOs/SurveyPostDTO';
import { useAlert } from '@/plugins/alert';
import { useRouter } from 'vue-router';

const CreateSurveyView = defineComponent({
    components: { IconButton, AutoResizeTextArea, HollowButton },
    setup() {
        const alert = useAlert();
        const router = useRouter();

        const survey = ref<SurveyPostDTO>({
            title: '',
            questions: []
        });

        const addQuestion = () => survey.value.questions.push({ title: '' });
        const removeQuestion = (index: number) => survey.value.questions.splice(index, 1);

        const submit = () => {
            alert({
                animation: "success",
                title: "Tudo pronto!",
                message: "Sua enquete foi cadastrada com sucesso! Basta utilizar o código 854345, ou compartilhar o link com os seus amigos.",
                options: [{
                    icon: 'check',
                    action: () => router.replace({ name: 'surveys' })
                }]
            });
        };

        return { survey, addQuestion, removeQuestion, submit };
    }
});

export default CreateSurveyView;
</script>

<style>

</style>
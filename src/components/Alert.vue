<template>
    <transition name="fade">
        <div class="fixed w-full h-full bg-black bg-opacity-80 z-50 top-0 flex flex-col items-center justify-center" v-show="state.isOpened">
            
            <transition name="scale">
                <div class="flex flex-col items-center justify-center" v-if="state.isOpened">
                    <Lottie :animation="state.animation" :size="state.animationSize" class="mb-6"/>
                    <h1 class="text-white text-3xl font-bold mb-8">{{ state.title }}</h1>
                    <p class="text-white w-full text-center mb-12" style="max-width: 300px" v-html="state.message"></p>
                    <div class="flex mb-40">

                        <div class="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-3 cursor-pointer" @click="state.isOpened = false"
                             v-if="state.options.length == 0">
                            <Icon icon="check" size="1.5rem" color="white"/>
                        </div>

                        <div class="w-12 h-12 rounded-full border border-white flex items-center justify-center mx-3 cursor-pointer"
                             v-for="(option, index) in state.options"
                             :key="index"
                             @click="() => triggetAction(option.action)">
                            <Icon :icon="option.icon" size="1.5rem" color="white"/>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue';
import Icon from '@/components/Icon.vue';
import { AlertOption } from '@/plugins/alert';
import Lottie from '@/components/Lottie.vue';

interface AlertState {
    options: AlertOption[] | null;
    animation: string;
    title: string;
    message: string;
    isOpened: boolean;
    animationSize: string;
}

const Alert = defineComponent({
    components: { Icon, Lottie },
    setup() {

        const state: AlertState = reactive<AlertState>({
            options: [],
            animation: "alert",
            title: "Ops...",
            message: "",
            isOpened: false,
            animationSize: '250px'
        });

        const displayAlert = (options: { title?: string; message: string; options?: AlertOption[]; animation?: string; detail?: string; animationSize?: string}) => {
            state.options = options.options || [];
            state.animation = options.animation || 'alert';
            state.title = options.title || "Ops...";
            state.message = options.message;
            state.animationSize = options.animationSize || '250px';
            state.isOpened = true;
        };

        const triggetAction = (action?: () => void) => {
            state.isOpened = false;
            action && action();
        };

        return { state, displayAlert, triggetAction };
    }
});

export default Alert;
</script>

<style>

</style>
<template>
    <div class="w-full min-h-screen bg-gradient-to-br from-purple-700 to-indigo-400 dark:from-gray-900 dark:to-gray-700 bg-fixed">
        <!-- <div class="w-full min-h-screen bg-gradient-to-br  bg-fixed"> -->
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"/>
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/assets/css/main.css';
import '@/assets/css/transitions.css';

export default defineComponent({
});
</script>

<style>
.rastreabilidade__title {
    color: rgb(79,70,229) !important;
}
</style>

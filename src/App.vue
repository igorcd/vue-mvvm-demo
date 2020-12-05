<template>
    <div class="w-full min-h-screen bg-gradient-to-br from-purple-700 to-indigo-400">
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

export default defineComponent({
});
</script>

<style>
.list-enter-from, .list-leave-to {
    opacity: 0;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.fade-enter-active, .fade-leave-active {
    transition: .3s;
}
</style>

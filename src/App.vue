<template>
    <div class="w-full min-h-screen bg-gradient-to-br from-purple-700 to-indigo-400">
        <RouterView #default="{ component }">
            <transition name="fade" mode="out-in">
                <component :is="component"/>
            </transition>
        </RouterView>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/assets/css/main.css';

import TodosView from './views/TodosView.vue';

export default defineComponent({
    components: { TodosView },
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

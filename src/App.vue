<template>
    <TodosView/>
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

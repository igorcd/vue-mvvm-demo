<template>
    <div class="py-3 px-4 mb-3 bg-white w-full rounded shadow-lg border-l-4 border-green-400 flex flex-col sm:flex-row items-stretch transition-all duration-300">

        <!-- Titulo -->
        <div class="sm:flex-1">
            <p class="text-xs font-bold">Titulo</p>
            <p class="leading-4">{{ todo.title }}</p>
        </div>

        <div class="w-full sm:w-px h-px sm:h-auto bg-gray-300 my-2 sm:my-0 sm:mx-4"/>

        <!-- Horário -->
        <div class="sm:w-14">
            <p class="text-xs font-bold">Horário</p>
            <p class="leading-4">{{ todo.time }}</p>
        </div>

        <div class="w-full sm:w-px h-px sm:h-auto bg-gray-300 my-2 sm:my-0 sm:mx-4"/>

        <!-- Finalizar -->
        <button class="flex items-center justify-center p-1" @click="$emit('finish')">
            <img src="@/assets/icons/icon_check_circle.svg"/>
        </button>
    </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import TodoModel from '@/models/TodoModel';

const Todo = defineComponent({
    props: {
        todo: {
            type: Object as PropType<TodoModel>,
            required: true
        }
    }
});

export default Todo;
</script>

<style>

</style>
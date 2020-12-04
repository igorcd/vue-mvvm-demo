<template>
    <transition name="fade" mode="out-in">
        <div class="flex items-center justify-center h-screen w-full" v-if="loading">
            <h1 class="font-bold text-white text-4xl">Carregando...</h1>
        </div>
            
        <div class="mx-auto w-full max-w-screen-lg px-4 py-16 sm:p-24" v-else>
            <h1 class="font-bold text-white text-center text-3xl sm:text-4xl mb-10 md:mb-20">
                Todos MVVM Demo
            </h1>

            <!-- Formuylário -->
            <form class="mb-20 max-w-screen-sm mx-auto flex flex-col items-stretch sm:flex-row py-2 sm:border-b sm:border-white" @submit.prevent="vm.addTodo">

                <!-- Titulo do Todo -->
                <input placeholder="Titulo do TODO"
                       v-model="vm.title"
                       class="bg-white bg-opacity-20 sm:bg-transparent text-white placeholder-white font-medium sm:text-2xl outline-none sm:flex-1 min-w-0 h-12 px-3"/>

                <div class="w-full h-px sm:h-auto my-2 sm:my-0 sm:mx-2 sm:w-px bg-white opacity-40"/>

                <!-- Horário -->
                <input placeholder="Horário"
                       @focus="$event.target.type = 'time'"
                       @blur="$event.target.type = 'text'"
                       v-model="vm.time"
                       class="bg-white bg-opacity-20 sm:bg-transparent outline-none sm:text-center text-white placeholder-white font-medium sm:text-2xl min-w-0 h-12 px-3 sm:w-32"/>

                <div class="w-full h-px sm:h-auto my-2 sm:my-0 sm:mx-2 sm:w-px bg-white opacity-40"/>

                <!-- Submit -->
                <button class="bg-white sm:bg-transparent bg-opacity-20 px-3 h-12 flex justify-center items-center">
                    <img src="@/assets/icons/icon_submit.svg"/>
                </button>
            </form>

            <div class="w-full">
                <transition-group name="list">
                    <Todo :todo="todo" v-for="todo in vm.todos" :key="todo.id" @finish="vm.closeTodo(todo.id)"/>
                </transition-group>
            </div>

        </div>
    </transition>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';

import Todo from '@/components/Todo.vue';
import vm from '@/viewModels/TodoViewModel';

export default defineComponent({
    components: { Todo },
    setup(){ 
        const loading = ref(true);
        
        vm.fetchTodos()
            .finally(() => loading.value = false);

        return { vm, loading };
    }
});
</script>

<style>

</style>
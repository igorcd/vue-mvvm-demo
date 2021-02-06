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
import '@/assets/css/transitions.css';

export default defineComponent({
});
</script>

<style>

</style>

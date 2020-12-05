import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import TodosView from '@/views/TodosView.vue';
import RegisterView from '@/views/RegisterView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Register',
        component: RegisterView
    },
    {
        path: '/todos',
        name: 'Todos',
        component: TodosView
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

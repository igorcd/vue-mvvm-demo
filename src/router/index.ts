import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import RegisterView from '@/views/Register/RegisterView.vue';
import ConfirmPhoneView from '@/views/Register/ConfirmPhoneView.vue';
import SurveysMainView from '@/views/Surveys/SurveysMainView.vue';
import LoginMainView from '@/views/Login/LoginMainView.vue';
import LoginView from '@/views/Login/LoginView.vue';
import PinView from '@/views/Login/PinView.vue';
import CreateSurveyView from '@/views/Surveys/CreateSurveyView.vue';
import SurveysView from '@/views/Surveys/SurveysView.vue';
import SurveyView from '@/views/Surveys/SurveyView.vue';

const routes: Array<RouteRecordRaw> = [
    // Login
    {
        path: '/',
        component: LoginMainView,
        children: [
            {
                path: '',
                name: 'pin',
                meta: { isPublic: true },
                component: PinView
            },
            {
                path: 'login',
                name: 'login',
                meta: { isPublic: true },
                component: LoginView
            }
        ]
    },
    // Registrar
    {
        path: '/register',
        name: 'register',
        meta: { isPublic: true },
        component: RegisterView
    },
    {
        path: '/phone',
        name: 'phone',
        component: ConfirmPhoneView
    },
    {
        path: '/surveys',
        component: SurveysMainView,
        children: [
            {
                path: '',
                name: 'surveys',
                component: SurveysView
            },
            {
                path: ':id',
                name: 'survey',
                component: SurveyView
            },
            {
                path: 'create',
                name: 'create',
                component: CreateSurveyView
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

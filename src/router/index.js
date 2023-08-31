import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FormView from '../views/FormView.vue';
import ChangeVal from '../views/changeVal.vue';

const router = createRouter({
    base: '/',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/form',
            name: 'form',
            component: FormView
        },
        {
            path: '/changeVal',
            name: 'changeVal',
            component: ChangeVal
        }
    ]
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
console.log(import.meta.env);
console.log(1111111);

const router = createRouter({
    base: '/pc/',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ]
});

export default router;

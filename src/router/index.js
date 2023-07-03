import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Equipe from "../pages/Equipe.vue";
const lazyLoad = (views) => import(`../pages/${views}.vue`);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/equipe',
        name: 'Equipe',
        component: lazyLoad('Equipe'),
    },
    {
        path: '/equipe/:id',
        name: 'Funcionario',
        component: lazyLoad('Funcionario'),
    },
    {
        path: '/:pathMath(.*)',
        component: lazyLoad('PaginaNaoEncontrada'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
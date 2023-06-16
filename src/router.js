import {createRouter, createWebHistory} from "vue-router";
import HomePage from './pages/HomePage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/project',
            name: 'project',
            component: ProjectPage
        },
        {
            path: '/project/:slug',
            name: 'single-project',
            component: SingleProjectPage
        }
    ]
});

export {router};
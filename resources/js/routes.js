import { createRouter, createWebHistory } from 'vue-router';

const Welcome = () => import('./components/Welcome.vue' /* Path: "resource/js/components/Welcome" */)
const CategoryList = () => import('./components/Category/Index.vue' /* Path: "resource/js/components/Category/Index" */)
const CategoryCreate = () => import('./components/Category/Add.vue' /* Path: "resource/js/components/Category/Add" */)
const CategoryEdit = () => import('./components/Category/Edit.vue' /* Path: "resource/js/components/Category/Edit" */)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'categoryList',
        path: '/categories',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;

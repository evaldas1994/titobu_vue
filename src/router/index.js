import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "@/components/pages/HomePage.vue";
import AccountPage from "@/components/pages/AccountPage.vue";
import CategoryPage from "@/components/pages/CategoryPage.vue";
import NotFoundPage from "@/components/pages/NotFoundPage.vue";
import LoginPage from "@/components/pages/LoginPage.vue";
import TransferIndex from "@/components/pages/transfers/TransferIndex.vue";
import TransferCreate from "@/components/pages/transfers/TransferCreate.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/accounts',
        component: AccountPage
    },
    {
        path: '/categories',
        component: CategoryPage
    },
    {
        path: '/transfers',
        component: TransferIndex
    },
    {
        path: '/transfers/create',
        component: TransferCreate
    },
    {
        path: '/transfer/create-by-category/:category_id',
        component: TransferCreate
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/:pathMach(.*)*',
        component: NotFoundPage
    },

]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router
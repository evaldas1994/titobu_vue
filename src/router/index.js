import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue';
import AccountPage from '@/components/pages/AccountPage.vue';
import CategoryPage from '@/components/pages/CategoryPage.vue';
import NotFoundPage from '@/components/pages/NotFoundPage.vue';
import LoginPage from '@/components/pages/LoginPage.vue';
import TransferIndex from '@/components/pages/transfers/TransferIndex.vue';
import TransferCreate from '@/components/pages/transfers/TransferCreate.vue';
import PeriodPage from '@/components/pages/PeriodPage.vue';
import PeriodCategoryPage from '@/components/pages/PeriodCategoryPage.vue';
import EarningPage from '@/components/pages/EarningPage.vue';
import ExpensesPage from '@/components/pages/ExpensesPage.vue';

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

    // v2
    {
        path: '/categories',
        component: CategoryPage
    },
    {
        path: '/periods',
        component: PeriodPage
    },
    {
        path: '/period-categories',
        component: PeriodCategoryPage
    },
    {
        path: '/earnings',
        component: EarningPage
    },
    {
        path: '/expenses',
        component: ExpensesPage
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router
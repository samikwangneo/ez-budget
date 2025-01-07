import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import BudgetPage from '../views/BudgetPage.vue'
import AnalyticsPage from '../views/AnalyticsPage.vue'
import AccountPage from '../views/AccountPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage,
    },

    {
      path: '/budget',
      name: 'Budget',
      component: BudgetPage,
    },

    {
      path: '/analytics',
      name: 'Analytics',
      component: AnalyticsPage,
    },

    {
      path: '/account',
      name: 'Account',
      component: AccountPage,
    }
  ],
})

export default router

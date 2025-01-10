import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import LoginSignup from '../views/LoginSignup.vue';
import DashboardPage from '../views/DashboardPage.vue';
import BudgetPage from '../views/BudgetPage.vue';
import AnalyticsPage from '../views/AnalyticsPage.vue';
import AccountPage from '../views/AccountPage.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: LandingPage,
    },

    {
      path: '/loginsignup',
      name: 'LoginSignup',
      component: LoginSignup,
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage,
      meta: {
        requiresAuth: true,
      }

    },

    {
      path: '/budget',
      name: 'Budget',
      component: BudgetPage,
      meta: {
        requiresAuth: true,
      }

    },

    {
      path: '/analytics',
      name: 'Analytics',
      component: AnalyticsPage,
      meta: {
        requiresAuth: true,
      }

    },

    {
      path: '/account',
      name: 'Account',
      component: AccountPage,
      meta: {
        requiresAuth: true,
      }

    }
  ],
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
}

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    }
    else {
      alert("Login or signup first lil bro");
      next("/")
    }
  }
  else {
    next();
  }
})

export default router

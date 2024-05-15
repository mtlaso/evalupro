import { createRouter, createWebHistory } from 'vue-router'
import { UserRoles } from '@/types'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SigninView.vue')
    },

    {
      path: '/',
      name: 'search',
      component: () => import('../views/SearchPageView.vue')
    },

    {
      path: '/product/:id',
      name: 'product-details',
      component: () => import('../views/ProductDetailsView.vue')
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: {
        requiresAuth: true
      }
    },

    {
      path: '/manage-categories',
      name: 'manage-categories',
      component: () => import('../views/ManageCategoriesView.vue'),
      meta: {
        requiresAuth: true,
        requiresRole: UserRoles.ADMIN
      }
    },

    {
      path: '/manage-products',
      name: 'manage-products',
      component: () => import('../views/ManageProductsView.vue'),
      meta: {
        requiresAuth: true,
        requiresRole: UserRoles.ADMIN
      }
    },

    {
      path: '/manage-criterias',
      name: 'manage-criterias',
      component: () => import('../views/ManageCriteriasView.vue'),
      meta: {
        requiresAuth: true,
        requiresRole: UserRoles.ADMIN
      }
    },

    {
      path: '/create-evaluation-tester/:id',
      name: 'create-evaluation-tester',
      component: () => import('../views/CreateEvaluationTesterView.vue'),
      meta: {
        requiresAuth: true,
        requiresRole: UserRoles.TESTER
      }
    },

    {
      path: '/manage-evaluations-tester',
      name: 'manage-evaluations-tester',
      component: () => import('../views/ManageEvaluationsTesterView.vue'),
      meta: {
        requiresAuth: true,
        requiresRole: UserRoles.TESTER
      }
    },

    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router

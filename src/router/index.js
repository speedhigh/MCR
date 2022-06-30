import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../components/Layout/index.vue'

const routes= [
  {
    path: '/',
    redirect: '/main'
  },

  {
    path: '/main',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component:() => import('../views/home/index.vue'),
        meta: {
          name: 'Home',
          breadcrumb : [{ text: '首页', url: '/home' }]
        }
      }
    ]
  },

  /** -----登录页----- **/
  {
    path: '/login',
    name: 'Login',
    component:() => import('../views/login/index.vue')
  },
  /** -------404------- **/
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component:() => import('../views/404/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/create',
  },
  {
    path: '/create',
    component: () => import(/* webpackChunkName: "create" */ '@/views/pages/CreateSurvey.vue')
  },
  {
    path: '/list',
    component: () => import(/* webpackChunkName: "create" */ '@/views/pages/SurveyList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

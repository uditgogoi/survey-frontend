import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    component: () => import(/* webpackChunkName: "auth" */ "@/views/Login"),
  },
  {
    path:'/',
    redirect:'/dashboard'
  },
  {
    path:"/dashboard",
    component: () => import(/* webpackChunkName: "auth" */ "@/views/DashboardModule.vue"),
    children: [
      {
        path: "/",
        redirect:"create"
      },
      {
        path: "create",
        name:'CreateSurvey',
        component: () =>
          import(
            /* webpackChunkName: "create" */ "@/views/pages/CreateSurvey.vue"
          ),
      },
      {
        path: "list",
        name:'SurveyList',
        component: () =>
          import(/* webpackChunkName: "list" */ "@/views/pages/SurveyList.vue"),
      },
    ],
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next)=> {
  const accessToken= localStorage.getItem('accessToken')
  if(to.fullPath !=='/auth'){
    if (!accessToken) {
      next('/auth');
    }
  }
  if (to.fullPath === '/auth') {
    if (accessToken) {
      next('/dashboard/create');
    }
  }
  next();
})

export default router;

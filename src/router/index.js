import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('views/home/Home.vue');
const About = ()=>import('views/about/About.vue');
const Login = ()=>import('views/login/Login.vue')

Vue.use(VueRouter);

const  routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'kisslock',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },{
    path:'/about',
    component:About
  },{
    path:'/login',
    component:Login
  }
];

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to , from , savePosition){
    return { x : 0 , y : 0 };
  }
});

export default router;
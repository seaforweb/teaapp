import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";

const Home = () => import('../views/home/Home')
const HomeSearchChild = () => import('../components/content/homeSearch/HomeSearchChild')

const Study = () => import('../views/study/Study')
const Discuss = () => import('../views/discuss/Discuss')

const Register = () =>import('../views/register/Register')
const Finding = () => import('../views/register/Finding')

const More = () => import('../views/more/More')
const Choose = () => import('../views/more/choose/Choose')
const GreenTea = () => import('../views/more/childMore/GreenTea')
const Hangzhou = () => import('../views/more/childMore/Hangzhou')
const Recommend = () => import('../views/more/childMore/Recommend')
const ThreeMonth = () => import('../views/more/childMore/ThreeMonth')
const Intro = () => import('../views/more/intro/Intro')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component:Login
  },
  {
    path:'/register',
    name: 'register',
    component: Register
  },
  {
    path:'/finding',
    name: 'finding',
    component: Finding
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:'/HomeSearchChild',
    component: HomeSearchChild
  },
  {
    path: '/study',
    component: Study
  },

  {
    path: '/discuss',
    component: Discuss
  },

  {
    path: '/more',
    component: More
  },
  {
    path: '/choose',
    component: Choose
  },
  {
    path: '/greenTea',
    component: GreenTea
  },
  {
    path: '/hangzhou',
    component: Hangzhou
  },
  {
    path: '/Recommend',
    component: Recommend
  },
  {
    path: '/threeMonth',
    component: ThreeMonth
  },
  {
    path: '/intro',
    component: Intro
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";

const Home = () => import('../views/home/Home')
const HomeSearchChild = () => import('../components/content/homeSearch/HomeSearchChild')

const Study = () => import('../views/study/Study')
const Sitting = () => import('../views/study/studyChild/drinkTea/Sitting')

const Discuss = () => import('../views/discuss/Discuss')
const DiscussBarItem = () => import('../views/discuss/discussBar/DiscussBarItem')
const Personal = () => import('../views/discuss/personal/Personal')
const PersonalHead = () => import('../views/discuss/personal/PersonalHead')
const Push = () => import('../views/discuss/discussChild/Push')
const Follow = () => import('../views/discuss/personal/Follow')

const Register = () =>import('../views/register/Register')
const Finding = () => import('../views/register/Finding')

const More = () => import('../views/more/More')
const Choose = () => import('../views/more/choose/Choose')
const GreenTea = () => import('../views/more/childMore/GreenTea')
const Hangzhou = () => import('../views/more/childMore/Hangzhou')
const Recommend = () => import('../views/more/childMore/Recommend')
const ThreeMonth = () => import('../views/more/childMore/ThreeMonth')
const Intro = () => import('../views/more/intro/Intro')
const IntroChild = () => import('../views/more/intro/IntroChild')

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
    path: '/sitting',
    component: Sitting
  },

  {
    path: '/discuss',
    component: Discuss
  },
  {
    path:'/discussBarItem',
    component: DiscussBarItem
  },
  {
    path:'/personal',
    component: Personal
  },
  {
    path:'/personalHead',
    component: PersonalHead
  },
  {
    path:'/push',
    component: Push
  },
  {
    path:'/follow',
    component: Follow
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
  },
  {
    path: '/introChild',
    component: IntroChild
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

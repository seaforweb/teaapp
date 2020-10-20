import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";

const Home = () => import('../views/home/Home')
const Study = () => import('../views/study/Study')
const Discuss = () => import('../views/discuss/Discuss')

const Register = () =>import('../views/register/Register')
const Finding = () => import('../views/register/Finding')

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
    path: './study',
    component: Study
  },
  {
    path: './discuss',
    component: Discuss
  }

  // {
  //   path: '/about',
  //   name: 'About',
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

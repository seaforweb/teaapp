import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Study = () => import('../views/study/Study')
const Discuss = () => import('../views/discuss/Discuss')
const Register = () =>import('../views/register/Register')
const Finding = () => import('../views/register/Finding')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: 'Login'
  },
  // {
  //   path: '/home',
  //   component: Home
  // },
  {
    path:'/register',
    name: 'register',
    component: Register
  },
  {
    path:'/finding',
    name: 'finding',
    component: Finding
  }
  // {
  //   path: './study',
  //   component: Study
  // },
  // {
  //   path: './discuss',
  //   component: Discuss
  // }

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

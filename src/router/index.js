import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/ProductView.vue'
import Cart from '../views/CartView.vue'
import Login from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  //TODO:404
  // {
  //   path: '*',
  //   redirect: '/',
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

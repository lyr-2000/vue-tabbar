import Vue from 'vue'
import Router from 'vue-router'

import Cart from "../views/cart/Cart";
import Profile from "../views/profile/Profile";
import Category from "../views/category/Category";
import Home from "../views/home/Home";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

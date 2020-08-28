import Vue from 'vue'
import Router from 'vue-router'

import HomePage from "../view/HomePage";
import Login from "../view/Login";
import Register from "../view/Register";

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})

router.beforeEach((to,from,next) => {
  const publicPages = ['/login','/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user")

  if (authRequired && !loggedIn){
    return next('/login');
  }

  next()
})

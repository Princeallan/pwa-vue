import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Todos from './views/TodosHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      props:true,
      component: () => import(/* webpackChunkName: "details" */ './views/Details.vue')
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ImportNewKitty from "@/views/ImportNewKitty";
import Store from "@/views/Store";
import Dojo from "@/views/Dojo";
import Recruit from "@/views/Recruit";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/import',
    name: 'ImportNewKitty',
    component: ImportNewKitty
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/dojo',
    name: 'Dojo',
    component: Dojo
  },
  {
    path: '/recruit/:id',
    name: 'Recruit',
    component: Recruit
  }
]

const router = new VueRouter({
  routes
})

export default router

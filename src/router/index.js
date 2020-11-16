import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ImportNewKitty from "@/views/ImportNewKitty";
import Store from "@/views/Store";
import Dojo from "@/views/Dojo";
import Recruit from "@/views/Recruit";
import ModifyRecruit from "@/views/ModifyRecruit";
import NoWallet from "@/views/NoWallet";

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
  },
  {
    path: '/modify/:id',
    name: 'Modify',
    component: ModifyRecruit
  },
  {
    path: '/no-wallet',
    name: 'NoWallet',
    component: NoWallet
  }
]

const router = new VueRouter({
  routes
})

export default router

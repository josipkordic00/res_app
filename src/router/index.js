import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import NotificationView from '../views/NotificationView.vue'
import ReservationView from '../views/ReservationView.vue'
import EvidentionView from '../views/EvidentionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: ReservationView
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotificationView
  },
  {
    path: '/evidentions',
    name: 'evidentions',
    component: EvidentionView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import PDF from '../views/pdf.vue'
import Container from '../views/container.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/pdf',
    name: 'pdf',
    component: PDF
  },
  {
    path: '/',
    name: 'container',
    component: Container
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

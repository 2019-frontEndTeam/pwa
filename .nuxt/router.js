import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a4ad1a0 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _129271f5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1a4ad1a0,
    name: "about"
  }, {
    path: "/",
    component: _129271f5,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { configRouter } from './route-config'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.emulateJSON = true

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// configure router
configRouter(router)

/* eslint-disable no-new */

router.start({components: { App }}, 'body')
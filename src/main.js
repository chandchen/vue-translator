// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)


const userHome = { template: '<div>Home</div>'}
const userProfile = { template: '<div>Profile</div>'}
const userPosts = { template: '<div>Posts</div>'}


const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: userHome
    },
  ],
  mode: "history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

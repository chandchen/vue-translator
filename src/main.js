// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import Translate from './components/Translate'
import LearnExamples from './components/LearnExamples'
import UsersExamples from './components/UsersExamples'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)


const Dictionary = { template: '<div>Dictionary is no avaiable for now :)</div>'}
const About = { template: '<div>About is pending....</div>'}


const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/translate",
      name: "translate",
      component: Translate
    },
    {
      path: "/dictionary",
      name: "dictionary",
      component: Dictionary
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/study",
      name: "study",
      component: LearnExamples
    },
    {
      path: "/study/:name",
      name: "study",
      component: LearnExamples
    }
  ],
  mode: "history"
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})

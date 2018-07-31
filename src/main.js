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
import AboutInfo from './components/AboutInfo'
import store from './store/store'
import UserProfile from './components/UserProfile'
import Count from './components/Count'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)


const Dictionary = { template: '<div>Dictionary is no avaiable for now :)</div>'}


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
      component: AboutInfo
    },
    {
      path: "/about/:name",
      name: "about",
      component: AboutInfo,
      children: [
      {
        path: 'more',
        component: UserProfile
      }]
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
    },
    {
      path: "/vuex",
      name: "vuex",
      component: Count
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
  store,
})

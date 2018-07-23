// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import Translate from './components/Translate'
import LearnExamples from './components/LearnExamples'

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


Vue.component('like', {
  template: "#like-component-tpl",
  data: function() {
    return {
      like_count: 10,
      liked: false,
    }
  },
  methods: {
    toggle_like: function() {
      if (!this.liked) {
        this.like_count++;
      } else {
        this.like_count--;
      }
      this.liked = !this.liked;
    }
  }
})

Vue.component('alert', {
  template: "#alert-component-tpl",
  props: ['msg'],
  methods: {
    on_click: function() {
      alert(this.msg);
    }
  }
})


Vue.component('balance', {
  template:
  `
      <div>
        <show @showBalance="show_balance"></show>
        <div v-if="show">Your Balance: \${{ balance }}</div>
      </div>
  `,
  data: function() {
    return {
      show: false,
      balance: null,
    }
  },
  methods: {
    show_balance: function(data) {
      console.log('data', data);
      this.show = true;
      this.balance = data.a;
    }
  }
})

Vue.component('show', {
  template: "#balance-show-tpl",
  methods: {
    on_click: function() {
      this.$emit('showBalance', {a: 1, b: 2});
    }
  }
})


// Communication between two components

var Event = new Vue();

Vue.component('apple', {
  template:
  `
  <div>
    Apple say: <input @keyup="on_change" v-model="apple_said"></input>
  </div>
  `,
  data: function() {
    return {
      apple_said: '',
    }
  },
  methods: {
    on_change: function() {
      Event.$emit('saidSthEvent', this.apple_said);
    }
  }
})

Vue.component('banana', {
  template: '<div>Banana say: {{ banana_said }}</div>',
  data: function() {
    return {
      banana_said: '',
    }
  },
  mounted: function() {
    var _this = this;
    Event.$on('saidSthEvent', function(data) {
      _this.banana_said = data;
    })
  }
})


new Vue({
  el: '#seg',
})

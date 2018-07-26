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


Vue.filter('currency', function(val, unit) {
  val = val || 0;
  unit = unit || 'USD'
  return val + unit;
})

Vue.filter('meter', function(val, unit) {
  val = val || 0;
  unit = unit || 'm'
  return (val / 1000).toFixed(2) + unit;
})

new Vue({
  el: '#seg',
})

new Vue({
  el: '#money',
  data: {
    price: 10,
    length: 10,
  }
})


// user custom directive
Vue.directive('pin', function(el, binding) {
  var pined = binding.value;
  var position = binding.modifiers;
  var warning = binding.arg;
  if (pined) {
    el.style.position = 'fixed';

    for (var key in position) {
      if (position[key]) {
        el.style[key] = '100px';
      }
    }
    if (warning === 'true') {
      el.style.background = 'yellow';
    }
    // el.style.top = '100px';
    // el.style.left = '100px';
  } else {
    el.style.position = 'static';
  }
})

new Vue({
  el: '#custom',
  data: {
    card1: {
      pined: false,
      label: 'Pined',
    },
    card2: {
      pined: false,
      label: 'Pined',
    }
  },
  methods: {
    on_click_1: function() {
      this.card1.pined = !this.card1.pined;
      if (this.card1.pined) {
        this.card1.label = 'Release';
      } else {
        this.card1.label = 'Pined';
      }
    },
    on_click_2: function() {
      this.card2.pined = !this.card2.pined;
      if (this.card2.pined) {
        this.card2.label = 'Release';
      } else {
        this.card2.label = 'Pined';
      }
    },
  }
})

// vuejs mixins usecase

var base = {
  data: function() {
    return {
      visible: false,
    }
  },
  methods: {
    toggle: function() {
      this.visible = !this.visible;
    },
    show: function() {
      this.visible = true;
    },
    hide: function() {
      this.visible = false;
    }
  }
}

Vue.component('tooltip', {
  template: '#mixins-tooltip',
  // data: function() {
  //   return {
  //     visible: false,
  //   }
  // },
  // methods: {
  //   show: function() {
  //     this.visible = true;
  //   },
  //   hide: function() {
  //     this.visible = false;
  //   }
  // }
  mixins: [base],
  // overriding mixins data here
  data: function() {
    return {
      visible: true,
    }
  }
})

Vue.component('popup', {
  template: '#mixins-popup',
  // data: function() {
  //   return {
  //     visible: false,
  //   }
  // },
  // methods: {
  //   toggle: function() {
  //     this.visible = !this.visible;
  //   },
  //   hide: function() {
  //     this.visible = !this.visible
  //   }
  // }
  mixins: [base],
})

new Vue({
  el: '#mixins',
  data: {

  }
})

Vue.component('panel', {
  template: '#panel-tpl',
  
})


new Vue({
  el: '#slots-example',
  data: {

  }
})
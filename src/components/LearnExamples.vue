<template>
  <div id="study">
    <h1>{{ title }}</h1>
    <div>
      <a :href="url">PiPi Shrimp Let's Go</a>
      <form @submit.prevent="onChangeUrl">
        <input type="text" name="" v-model="url" placeholder="url">
        <button type="submit">Change Url</button>
      </form>
    </div>
    <hr class="my-4">
    <div>
      <input type="text" name="" v-model="name" placeholder="Type your name here...">
      <span v-show="name">Your name: {{ name }}</span>
    </div>
    <div>
      <input type="text" name="" v-model="age" placeholder="Type your age here...">
      <span v-show="name">Your age: {{ age }}</span>
    </div>
    <div>
      <input type="text" name="" v-model="gender" placeholder="Type your gender here...">
      <span v-show="name">Your gender: {{ gender }}</span>
    </div>
    <div>
      <form @keyup.enter="onEnter" @submit.prevent="onSubmit">
        <input type="text" name="">
      </form>
    </div>
    <hr class="my-4">
    <div>
      <label>
        Man
        <input type="radio" v-model="sex" value="male">
      </label>
      <label>
        Woman
        <input type="radio" v-model="sex" value="female">
      </label>
      <br>{{ sex }}
    </div>

    <div>
      <label>
        Man
        <input type="checkbox" v-model="sexual" value="male">
      </label>
      <label>
        Woman
        <input type="checkbox" v-model="sexual" value="female">
      </label>
      <br>{{ sexual }}
    </div>

    <div>
      <select v-model="from">
        <option value="1">William</option>
        <option value="2">Eliza</option>
        <option value="3">Nical</option>
      </select>
      <br>{{ from }}
    </div>

    <div>
      <select v-model="destination" multiple>
        <option value="1">U.S.A</option>
        <option value="2">England</option>
        <option value="3">Koran</option>
      </select>
      <br>{{ destination }}
    </div>

    <div v-if="role == 'admin'">
      Welcome back admin!
    </div>
    <div v-else-if="role == 'hr'">
      Welcome back HR!
      ...
    </div>
    <div v-else>
      Permission Denied!
    </div>
    <hr class="my-4">
    <div>
      <table border="1">
        <thead>
          <th>Class</th>
          <th>Score</th>
        </thead>
        <tbody>
          <tr>
            <td>Math</td>
            <td><input type="text" name="" v-model.number="math"></td>
          </tr>
          <tr>
            <td>English</td>
            <td><input type="text" name="" v-model.number="english"></td>
          </tr>
          <tr>
            <td>Physic</td>
            <td><input type="text" name="" v-model.number="physic"></td>
          </tr>
          <tr>
            <td>Total Score</td>
            <td>{{ sum }}</td>
          </tr>
          <tr>
            <td>Average Score</td>
            <td>{{ average }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <like></like>
    <alert msg="Say something here"></alert>
    <balance></balance>
    <apple></apple>
    <banana></banana>

    <div id="money">
      <div>
        <input type="text" name="" v-model="length">mm
        <br>
        {{ length | meter }}
      </div>
      <hr>
      <div>
        <input type="text" name="" v-model="price">
        {{ price | currency('RMB') }}
      </div>
    </div>

    <div id="custom">
      <div v-pin:true.bottom.right='card1.pined' class="card">
        <button @click="on_click_1()">{{ card1.label }}</button>
        NOTE 001: ABC DEFIJKIJK
      </div>
      <div v-pin:false.top.right='card2.pined' class="card">
        <button @click="on_click_2()">{{ card2.label }}</button>
        NOTE 002: ABC DEFIJKIJK
      </div>
      <div>
        dsahjdhaskdjaskl;fjsafhjksdfksdlfjhdskfjsklj
      </div>
    </div>

    <div id="mixins">
      <popup></popup>
      <tooltip></tooltip>
    </div>

    <div id="slots-example">
      <panel>
        <div slot="content-top">
          Yoyouyoyyy
        </div>
      </panel>
      <panel>
        <div slot="content-bottom">
          hahahahahah
        </div>
      </panel>
    </div>

  </div>
</template>

<script>


export default {
  name: 'study',
  data(){
    return {
      title: 'Hello world!',
      name: 'Chand',
      age: null,
      gender: null,
      url: 'http://chandn.com',
      sex: 'female',
      sexual: ['male'],
      from: 3,
      destination: [],
      role: 'hr',
      math: 88,
      english: 99,
      physic: 66,
      price: 10,
      length: 10,
      card1: {
        pined: false,
        label: 'Pined',
      },
      card2: {
        pined: false,
        label: 'Pined',
      }
    }
  },
  methods: {
    onSubmit: function(e) {
      // e.preventDefault();
      console.log('>>>>>on submit')
    },
    onEnter: function() {
      console.log('>>>>>on enter')
    },
    onChangeUrl: function(e) {
      // this.$emit('changeUrlEvent', this.url)
    },
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
  },
  components: {

  },
  computed: {
    sum: function() {
      return parseFloat(this.math) + parseFloat(this.english) + parseFloat(this.physic)
    },
    average: function() {
      return Math.round(this.sum/3)
    }
  }
}

import Vue from 'vue'

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


Vue.component('panel', {
  template: '#panel-tpl',
  
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

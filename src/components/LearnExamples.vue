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
    }

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
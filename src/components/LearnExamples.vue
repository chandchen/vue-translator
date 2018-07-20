<template>
  <div id="study">
    <h1>{{ title }}</h1>
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
    }
  },
  methods: {

  },
  components: {

  },
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
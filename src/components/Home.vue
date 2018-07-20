<template>
  <div id="home">
    <img src="./../assets/logo.png"> 
    <h1>Vue.js Demo</h1>
  </div>
</template>

<script>
// import HelloWorld from './HelloWorld'


export default {
  name: 'home',
  data(){
    return {
      title: 'Hello world!',
      users: [

      ],
    }
  },
  methods: {
    updateTitle(title) {
      this.title = title
    }
  },
  components: {
    // HelloWorld,
  },
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        this.users = data.body;
      })
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
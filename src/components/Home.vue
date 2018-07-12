<template>
  <div id="home">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <!-- <users v-bind:users="users"></users> -->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld'


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
    HelloWorld,
  },
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        this.users = data.body;
      })
  }
}
</script>

<style scoped>

h1{
  color: purple;
}
</style>

<template>
  <div id="about">
    <h1>{{ title }}</h1>
    <form @submit.prevent="updateTitle">
      <input type="text" name="" placeholder="Text title here...">
      <button type="submit">Change Title</button>
    </form>

    <users :users="users"></users>

  </div>
</template>

<script>

import Users from './Users'

export default {
  name: 'about',
  data(){
    return {
      title: "User's Profile",
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
    'users': Users,

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

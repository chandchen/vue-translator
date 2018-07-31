<template>
  <div class="users">
    <ul>
      <li v-for='user in users' @click='user.show=!user.show'>
        <h5>{{ user.name }}</h5>
        <router-link :to="'/about/' + user.username + '/more'">Click More</router-link>
        <!-- <router-link to="more" append>Click More</router-link> -->
        <router-view :user="user"></router-view>
      </li>
    </ul>

    <button @click="deleteUser">Delete</button>

  </div>
</template>

<script>
export default {
  name: 'users',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteUser: function() {
      this.users.pop();
    }
  }
}
</script>


<style scoped>
.users{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: left;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
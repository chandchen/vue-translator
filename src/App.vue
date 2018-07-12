<template>
  <div id="app">

    <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="https://github.com/chandchen/">Hit&Run</a>
        <!-- <router-link class="navbar-brand" to="/">Hit&Run</router-link> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" :class="{active:show==1}" @click="aShow">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item" :class="{active:show==2}" @click="bShow">
              <router-link class="nav-link" to="/translate">Translate</router-link>
            </li>
            <li class="nav-item" :class="{active:show==3}" @click="cShow">
              <router-link class="nav-link" to="/dictionary">Dictionary</router-link>
            </li>
            <li class="nav-item" :class="{active:show==4}" @click="dShow">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
    <div class="container">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data: function() {
    return {
      result: "",
      show: 1,
    }
  },
  components: {

  },
  methods: {
    aShow: function() {
      this.show = 1;
    },
    bShow: function() {
      this.show = 2;
    },
    cShow: function() {
      this.show = 3;
    },
    dShow: function() {
      this.show = 4;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

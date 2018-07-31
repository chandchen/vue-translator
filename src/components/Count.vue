<template>
  <div id="count">
    <h2>{{ msg }}</h2>
    <hr>
    <h3>{{ $store.state.count }}</h3>
    <!-- <h3>{{ $store.state.a.count }}</h3> -->

    <div id="method-1">
      <button @click="$store.commit('add', 10)">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>

    <p> -------- </p>

    <div id="method-2">
      <button @click="add(10)">+</button>
      <button @click="reduce">-</button>
    </div>

    <h3>computed: --- {{ count }} ---</h3>

    <div id="method-3">
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </div>

  </div>
</template>

<script>
  import store from '@/store/store';
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'count',
    data(){
      return {
        msg: "Hello Vuex",

      }
    },
    store,

    // METHOD 1
    // computed: {
    //   count() {
    //     return this.$store.state.count;
    //   }
    // },

    // METHOD 2
    // computed: mapState({
    //   count: state => state.count
    // }),

    // METHOD 3
    computed: {
      ...mapState(["count"]),
      // count() {
      //   return this.$store.getters.count;
      // },
      ...mapGetters(["count"]),
    },

    methods: {
      ...mapMutations(["add", "reduce"]),
      ...mapActions(["addAction", "reduceAction"]),
    }

  }
</script>

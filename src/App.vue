<template>
  <div id="app">
    <h1>&#12288</h1>
    <h1>Translate Online</h1>
    <h5 class="text-muted">Get a quick, free translation!</h5>
    <p></p>
    <translateForm v-on:formSubmitEvent="translateText"></translateForm>
    <hr class="my-4">
    <TranslateOutput v-text="result"></TranslateOutput>
  </div>
</template>

<script>

import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'

export default {
  name: 'App',
  data: function() {
    return {
      result: ""
    }
  },
  components: {
    TranslateForm,
    TranslateOutput
  },
  methods: {
    translateText: function(data, lang) {
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180711T035615Z.672207da8c81f299.bf6af01d3901ceec57da26b1c5af7fd737cc5d04&lang='+lang+'&text='+data).then((response) => {
        this.result = response.body.text[0]
      })
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

<template>
  <div id="translate">
    <h1>Translate Online</h1>
    <h5 class="text-muted">Get a quick, free translation!</h5>
    <p></p>
    <translateForm v-on:formSubmitEvent="translateText"></translateForm>
    <hr class="my-4">
    <TranslateOutput v-text="result"></TranslateOutput>
  </div>
</template>

<script>

import TranslateForm from './TranslateForm'
import TranslateOutput from './TranslateOutput'

export default {
  name: 'Translate',
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

</style>

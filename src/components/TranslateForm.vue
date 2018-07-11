<template>
  <div class="form-group row" id="translateForm">

    <div class="form-group col-md-12 offset-md-2">
    <form id="transForm" class="form-inline" v-on:submit="formSubmit">

      <div class="form-group col-md-3">
        <input class="form-control" type="text" v-model="textToTranslate" name="" placeholder="Type text here" >
      </div>

      <div class="form-group col-md-3">
          <select class="form-control" v-model="language">
            <option value="zh">Chinese</option>
            <option value="en">English</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="fr">French</option>
          </select>
      </div>

      <div class="form-group col-md-3">
          <button type="submit" class="btn btn-primary">Translate</button>
      </div>

    </form>
    </div>
  </div>
</template>

<script>


export default {
  name: 'translateForm',
  data: function() {
    return {
      textToTranslate: "",
      language: ""
    }
  },
  components: {

  },
  methods: {
    formSubmit: function(e) {
      this.$emit('formSubmitEvent', this.textToTranslate, this.language);
      e.preventDefault();
    }
  },
  created: function() {
    this.language = "en";
  }
}
</script>

<style>
#transForm {
  /*border: 1px #ccc solid;*/
  /*border-radius: 10px;*/
}
#translateForm {
  /*text-align: left;*/
}
</style>

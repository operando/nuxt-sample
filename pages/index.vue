<template>
  <div class="container">
    <h1>Hello Nuxt!!</h1>
    <!--  assets dir  -->
    <img src="~/assets/nuxt_logo.svg">
    <img src="~/assets/code.png" width="300px">
    <!--  static dir  -->
    <img src="favicon.ico">
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    components: {}
  })
</script>

<style lang="scss" scoped>
  .nuxt-logo {
    background: url("~assets/nuxt_logo.svg");
  }
</style>

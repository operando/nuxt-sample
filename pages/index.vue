<template>
  <div class="container">
    <h1>Hello Nuxt!!</h1>
    <img src="~/assets/nuxt_logo.svg">
    <img src="~/assets/code.png" width="300px">
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

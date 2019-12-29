<template>
  <div class="container">
    <h1>Hello {{this.$route.params.id}}!!</h1>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "_id"
  })
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    justify-content: center;
    display: flex;
    align-items: center;
    text-align: center;
  }

</style>

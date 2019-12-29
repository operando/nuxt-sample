<template>
  <div class="container">
    <h1>Hello {{this.$route.params.id}}!!</h1>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    layout: 'users',
    name: "_id",
    validate({params}) {
      return /^\d+$/.test(params.id)
    }
  })
</script>

<style lang="scss" scoped>

</style>

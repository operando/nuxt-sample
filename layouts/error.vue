<template>
  <div class="p-error">
    <div>
      <h1>Error</h1>
    </div>
    <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
    <h1 v-else>エラーです</h1>
    <h1 v-if="error.message !== undefined">{{error.message}}</h1>
    <h1 v-else>エラーです</h1>
    <nuxt-link to="/">ホーム</nuxt-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "error",
    props: ['error']
  })
</script>

<style lang="scss" scoped>
  $block: '.p-error';
  #{$block} {
  }

</style>

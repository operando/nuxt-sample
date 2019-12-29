<template>
  <div class="container">
    <Logo/>
    <h1>Hello Nuxt Sample Page!!</h1>
    <h1 class="title">Title {{title}}</h1>
  </div>
</template>

<script lang="ts">
  import Logo from '~/components/Logo.vue'
  import Vue from 'vue'
  import axios from 'axios'

  export default Vue.extend({
    components: {
      Logo
    },
    // async asyncData({params}) {
    //   const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
    //   return {title: data.title}
    // }
    asyncData({params}) {
      return axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(res => {
          return {title: res.data.title}
        })
    }
  })
</script>

<style>
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
</style>

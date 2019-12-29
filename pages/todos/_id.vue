<template>
  <div>
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import axios from "axios";

  export default Vue.extend({
    name: "_id",
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    asyncData({params, error}) {
      return axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
        .then(res => {
          return {title: res.data.title}
        })
        .catch(e => {
          error({statusCode: 404, message: "Not Found"})
        })
    }
  })
</script>

<style lang="scss" scoped>
  .title {
    font-size: 50px;
    font-weight: bold;
    margin: 20px;
    color: cornflowerblue;
  }

</style>

<template>
  <ul>
    <li v-for="todo in todos">
      <p>{{todo}}</p>
    </li>
    <li>
      <input placeholder="todo" @keyup.enter="addTodo">
    </li>
  </ul>

</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: "index",
    computed: {
      todos(): string[] {
        return this.$store.state.todo.list
      }
    },
    methods: {
      addTodo(e:any) {
        this.$store.commit('todo/add', e.target.value)
        e.target.value = ''
      }
    },
  })
</script>

<style scoped>

</style>

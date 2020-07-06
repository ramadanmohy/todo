<template lang="html">
  <div>
    <TodoItem 
      v-for="todo in todos"
      :key=todo.id
      :title="todo.title" 
      class="mb-3" />
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';
import { mapState } from 'vuex'
export default {
  components: {
    TodoItem,
  },
  computed: mapState([
    'todos'
  ])
}
</script>

<style lang="css">
</style>

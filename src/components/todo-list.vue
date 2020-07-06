<template lang="html">
  <TodosDataProvider>
    <div slot-scope="{ todos: todos }">
      <TodoItem 
        v-for="todo in todos"
        :key=todo.id
        :title="todo.title" 
        class="mb-3" />
    </div>
  </TodosDataProvider>
</template>

<script>
import TodoItem from '@/components/todo-item';
import TodosDataProvider from '../slots/todos-data-provider'

export default {
  components: {
    TodoItem,
    TodosDataProvider
  }
}
</script>

<style lang="css">
</style>

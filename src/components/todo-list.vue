<template lang="html">
  <TodosDataProvider>
    <div slot-scope="{ items }">
      <TodoItem 
        v-for="todo in items"
        :key=todo.id
        :title="todo.title" 
        :id="todo.id"
        :done="todo.done"
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

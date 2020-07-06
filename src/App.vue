<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-layout
        align-center
        fill-height
        justify-center
      >
        <v-flex xs6>
          <ConfirmModal v-if="isModalOpen"/>
          <TodoForm />
          <TodoList/>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import TodoForm from '@/components/todo-form'
import TodoList from '@/components/todo-list'
import ConfirmModal from '@/components/confirm-modal'

export default {
  name: 'App',
  computed: {
    isModalOpen: {
      get(){
        return this.$store.state.TodoModule.isModalOpen
      }
    }
  },
  components: {
    TodoForm,
    TodoList,
    ConfirmModal
  },
  data () {
    return {
      title: 'Vue Todos'
    }
  }
}
</script>

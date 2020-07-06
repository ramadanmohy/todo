<template>
  <v-dialog 
    v-model="isModalOpen" 
    persistent 
  >
    <v-card>
      <v-card-title class="headline">Are you sure that you want to delete this item?</v-card-title>
      <v-card-actions>
        <v-btn 
          color="darken-1" 
          text 
          @click="$store.commit('TodoModule/openModal', false)"
        >Cancel</v-btn>
        <v-btn 
          color="darken-1" 
          text 
          @click="$store.dispatch('TodoModule/deleteItem')"
        >Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    computed: {
    isModalOpen: {
      get(){
        return this.$store.state.TodoModule.isModalOpen
      }
    }
  },
  }
</script>

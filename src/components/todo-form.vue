<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    @keyup="submit"
    v-model='title'
    solo
  />
</template>

<script>
export default {
  methods: {
    submit(e){
      if(e.keyCode == 13 && this.title)
        this.$store.dispatch('TodoModule/addItem')
    }
  },
  computed: {
    title: {
      get(){
        return this.$store.state.TodoModule.title;
      },
      set(value){
        this.$store.commit('TodoModule/updateTitle', value);
      }
    }
  }
}
</script>

<style lang="css">
</style>

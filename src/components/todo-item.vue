<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ title }}</h3>
      </div>
    </v-card-title>
    <v-btn 
      v-if="!done"
      @click="onComplete">
      Complete
    </v-btn>
    <v-btn 
      @click="onDelete" 
      color="error">
      Delete
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
    done: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true,
    }
  },
  methods: {
    onDelete(){
      this.$store.commit('TodoModule/openModal', true)
      this.$store.commit('TodoModule/setSelectedId', this.id)
    },
    onComplete(){
      this.$store.dispatch('TodoModule/completeItem', this.id)
    }
  }
}
</script>

<style lang="css">
</style>

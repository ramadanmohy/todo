<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <v-text-field
          @blur="submitEdit"
          v-model='updatedTitle'
          v-if="updatedTitle"
        />
        <h3 
          v-else 
          @click="updatedTitle = title"
          class="headline mb-0">{{ title }}</h3>

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
  data(){
    return{
      updatedTitle: null
    }
  },
  methods: {
    submitEdit(event){
      this.$store.dispatch('TodoModule/updateItem', {id: this.id, title: event.target.value});
      this.updatedTitle = null;
    },
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
  h3{
    cursor: pointer;
    position: relative;
  }

  h3:hover:after{
    position: absolute;
    top: -20px;
    left: 0;
    content: "Edit";
    font-size: 14px;
    color: blue;
  }

</style>

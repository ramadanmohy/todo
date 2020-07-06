<script>
import { mapState } from 'vuex'
export default {
    computed: mapState({
      todos: state => state.TodoModule.todos
    }),
  render() {
    return this.$scopedSlots.default({
      todos: this.todos,
    });
  },
};
</script>


<script>
import { mapState } from 'vuex'
export default {
    computed: mapState([
    'todos'
  ]),
  render() {
    return this.$scopedSlots.default({
      todos: this.todos,
    });
  },
};
</script>


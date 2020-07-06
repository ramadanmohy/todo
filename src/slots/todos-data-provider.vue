<script>
import { mapState } from 'vuex'
export default {
    computed: mapState({
      items: state => state.TodoModule.items
    }),
  render() {
    return this.$scopedSlots.default({
      items: this.items,
    });
  },
};
</script>


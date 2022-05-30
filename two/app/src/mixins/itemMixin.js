import commonMixin from "@/mixins/commonMixin";

export default {
  mixins: [commonMixin],
  props: {
    color: {
      type: String
    },
    item: {
      type: Object,
      default: null
    },
  },
  data() {
    return {
      localItem: this.item
    }
  }
}
export default {
  props: {
    color: {
      type: String
    },
    item: {
      type: Object,
      default: null
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      localItem: this.item
    }
  },
  methods: {

    /**
     * remove item
     *
     * @param type
     * @param elt
     */
    removeItem(type, elt) {
      this.$emit('removeItem', type, elt)
    },

    /**
     * focus Field
     *
     * @param item
     * @param type
     */
    focusField(item, type) {
      this.$emit('focusField', item, type)
    }
  }
}
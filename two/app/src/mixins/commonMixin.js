export default {
  props: {
    type: {
      type: String,
      default: 'default',
    },
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
    },
  }
}
export default {
  props: {
    /*item: {
      type: Object,
      default: null
    },*/
    isDisabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      btnActions: [
        'Move',
        'Delete',
        'Copie',
        'Reference',
      ]
    }
  },
  methods: {
    /**
     *
     */
    toMove() {
      this.$emit('toMove')
    },
    /**
     *
     */
    toReference() {
      this.$emit('toReference')
    },

    /**
     *
     */
    toCopy() {
      this.$emit('toCopy')
    },
    /**
     *
     */
    toDelete() {
      this.$emit('toDelete')
    }
  }
}
export default {
  props: {
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
         * Move
         */
    toMove() {
      this.$emit('toMove')
    },

    /**
         * copy by reference
         */
    toReference() {
      this.$emit('toReference')
    },

    /**
         * copy
         */
    toCopy() {
      this.$emit('toCopy')
    },

    /**
         * delete
         */
    toDelete() {
      this.$emit('toDelete')
    }
  }
}
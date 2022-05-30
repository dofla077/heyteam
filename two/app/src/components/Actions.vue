<template>
  <div class="col-1" style="margin-top: 43px;padding-left: 0;margin-left: -12px;">
    <ul class="actions">
      <li v-for="action in btnActions" :key="action">
        <button v-if="action === 'Move'" @click="toMove" class="actions btn btn-warning" :disabled="isDisabled">{{ action }}</button>
        <button v-else-if="action === 'Copie'" @click="toCopy" class="actions btn btn-warning" :disabled="isDisabled">{{ action }}</button>
        <button v-else-if="action === 'Delete'" @click="toDelete" class="actions btn btn-warning" :disabled="isDisabled">{{ action }}</button>
        <button v-else-if="action === 'Reference'" @click="toReference" class="actions btn btn-warning" :disabled="isDisabled">{{ action }}</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'actions',
  props: {
    item: {
    },
    isDisabled: {
      type: Boolean
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
</script>
<style>

li {
  list-style: none;
}

.item > li {
  display: inline-block;
  padding: 10px;
}

.actions {
}

.actions > li {
  padding: 5px;
}

.actions > li > .btn-warning {
  color: white !important;
  width: 6em;
  background-color: #ED731F;
}

</style>
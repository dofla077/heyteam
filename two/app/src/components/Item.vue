<template>
  <div class="card text-dark mb-2" :style="{'background-color': color }" @click="focusField(item, type)">
    <button type="button" class="close" @click="removeItem(type, item)" aria-label="Close">X</button>
    <div class="card-body">
      <input style="text-align: center; margin-top: 30px" :name="item.name" type="text"
             v-model="localItem.name"
             @focus="focusField(item, type)" />

    </div>
  </div>
</template>
<script>
export default {
  name: 'item',
  props: {
    color: {
      type: String
    },
    item: {
      type: Object
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
     *
     * @param type
     * @param elt
     */
    removeItem(type, elt) {
      this.$emit('removeItem', type, elt)
    },
    /**
     *
     * @param item
     * @param type
     */
    focusField(item, type) {
      this.$emit('focusField', item, type)
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

.actions > li {
  padding: 5px;
}

.card {
  display: inline-block;
  max-width: 18rem;
}

.card-body {
  padding: 30px;
}

.close {
  left: 12.7em;
  white-space: normal;
  position: absolute;
  top: 4px;
  border: 1px solid #BCBCBC;
  color: #BCBCBC;
}
</style>
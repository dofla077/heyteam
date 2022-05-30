<template>
  <div class="col-4 item-group">
    <button class="add-btn" type="button" @click="toAdd('default')">+</button>
    <ul class="item">
      <li class="d-item" v-for="(item, index) in items" :key="item.color + index">
        <Item :color="item.name" :item="item" :type="type" @focusField="focusField" @removeItem="removeItem"/>
      </li>
    </ul>
  </div>
</template>
<script>
import Item from "./Item"
import commonMixin from "@/mixins/commonMixin";

export default {
  name: 'items',
  components: {Item},
  mixins: [commonMixin],
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  methods: {
    /**
     * focus Field
     *
     * @param type
     */
    toAdd(type) {
      this.$emit('toAdd', type)
    }
  }
}
</script>
<style>

.add-btn {
  position: relative;
  left: 18.5em;
  border-radius: 16px;
  bottom: 9px;
  background-color: #F48138;
  color: white;
  border: none;
}

.item-group {
  background-color: #333F50;
}

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

</style>
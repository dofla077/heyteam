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

import itemMixin from "@/mixins/itemMixin";

export default {
  name: 'item',
  mixins: [itemMixin]
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
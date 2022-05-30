<template>
  <div id="app">
    <div class="row">

      <div class="col-4 item-group">
        <button class="add-btn" type="button" @click="toAdd('default')">+</button>
        <ul class="item">
          <li class="d-item" v-for="(item, index) in defaultItems" :key="item.color + index">
            <Item :color="item.name" :item="item" type="default"
                  @focusField="focusField"
                  @removeItem="removeItem"/>
          </li>
        </ul>
      </div>

      <Actions @toMove="toMove" @toCopy="toCopy" @toReference="toReference" @toDelete="toDelete" :is-disabled="isDisabled"/>

      <div class="col-4 item-group">
        <button class="add-btn" type="button" @click="toAdd('right')">+</button>
        <ul class="item">
          <li class="d-item" v-for="(item, index) in rightItems" :key="item.color + index">
            <Item :color="item.name" @focusField="focusField" :item="item" type="right"
                  @removeItem="removeItem"/>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
// components
import Actions from '@/components/Actions'
import Item from '@/components/Item'
// mixins
import indexMixin from '@/mixins/indexMixin'

export default {
  name: 'App',
  mixins: [indexMixin],
  components: {Item, Actions},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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

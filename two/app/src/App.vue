<template>
  <div id="app">
    <div class="row">

      <div class="col-4 item-group">
        <button class="add-btn" type="button" @click="addItem('default')">+</button>
        <ul class="item">
          <li class="d-item" v-for="(item, index) in defaultItems" :key="index">
            <Item :color="item.name" :item="item" type="default"
                  @focusField="focusField"
                  @removeItem="removeItem"/>
          </li>
        </ul>
      </div>

      <Actions :item="selected" @toMove="toMove" @toCopy="toCopy" @toDelete="toDelete" :is-disabled="isDisabled"/>

      <div class="col-4 item-group">
        <button class="add-btn" type="button" @click="addItem('right')">+</button>
        <ul class="item">
          <li class="d-item" v-for="(item, index) in rightItems" :key="index">
            <Item :color="item.name" @focusField="focusField" :item="item" type="right"
                  @removeItem="removeItem"/>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>

import Actions from "@/components/Actions";
import Item from "@/components/Item";

export default {
  name: 'App',
  data() {
    return {
      defaultItems: [
        {name: 'Blue'},
        {name: 'Orange'},
        {name: 'Green'},
        {name: '#000000'},
      ],
      rightItems: [
        {name: 'Grey'},
      ],
      selected: {},
      move: {},
      copied: [],
      focusPosition: '',
      isDisabled: true,
      alertMaxiItem: 'Maximum of 6 items',
    }
  },
  components: {Item, Actions},
  methods: {

    /**
     *
     */
    toMove() {
      if (this.rightItems.length < 6 && this.focusPosition === 'default') {
        this.rightItems.push(this.move)

        //Reflect.deleteProperty(this.defaultItems, this.selected)
        this.defaultItems.splice(this.defaultItems.indexOf(this.selected), 1)
        this.defaultItems = [...this.defaultItems]
      } else if (this.defaultItems.length < 6 && this.focusPosition === 'right') {
        this.defaultItems.push(this.move)
        //Reflect.deleteProperty(this.rightItems, this.selected)
        this.rightItems.splice(this.rightItems.indexOf(this.selected), 1)
      } else {
        alert(this.alertMaxiItem)
      }
      this.clearFocus()
    },

    /**
     *
     */
    clearFocus() {
      this.selected = null
      this.move = null
      this.focusPosition = null
      this.isDisabled = true
    },

    /**
     *
     */
    toCopy() {
      if (this.rightItems.length < 6 && this.focusPosition === 'default') {
        this.rightItems.push(Object.assign({}, this.selected))
      } else if (this.defaultItems.length < 6 && this.focusPosition === 'right') {
        this.defaultItems.push(Object.assign({}, this.selected))
      } else {
        alert(this.alertMaxiItem)
      }
      this.clearFocus()
    },

    /**
     *
     */
    toDelete() {
      this.focusPosition === 'default'
          ? this.defaultItems.splice(this.defaultItems.indexOf(this.selected), 1)
          : this.rightItems.splice(this.rightItems.indexOf(this.selected), 1)
      this.clearFocus()
    },

    /**
     *
     * @param elt
     * @param type
     */
    focusField(elt, type) {
      this.selected = elt;
      this.move = {...elt};
      this.focusPosition = type
      this.isDisabled = false
    },

    /**
     *
     * @param type
     */
    addItem(type) {
      let item = prompt('Add Item');

      if (this.defaultItems.length < 6 && type === 'default') {
        this.defaultItems.push({name: item})
      } else if (this.rightItems.length < 6 && type === 'right') {
        this.rightItems.push({name: item});
      } else {
        alert(this.alertMaxiItem)
      }
    },

    /**
     *
     * @param type
     * @param elt
     */
    removeItem(type, elt) {
      type === 'default'
          ? this.defaultItems.splice(this.defaultItems.indexOf(elt), 1)
          : this.rightItems.splice(this.rightItems.indexOf(elt), 1);
      this.clearFocus()
    }
  }
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

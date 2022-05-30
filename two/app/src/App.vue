<template>
  <div id="app">
    <div class="row">
      <!-- default items-->
      <items @toAdd="toAdd" type="default" @focusField="focusField" @removeItem="removeItem" :items="defaultItems"/>
      <!-- btn actions -->
      <Actions @toMove="toMove" @toCopy="toCopy" @toReference="toReference" @toDelete="toDelete" :is-disabled="isDisabled"/>      <!-- default items-->
      <!-- right items -->
      <items @toAdd="toAdd" type="right" @focusField="focusField" @removeItem="removeItem" :items="rightItems"/>
    </div>
  </div>
</template>

<script>
// components
import Actions from '@/components/Actions'
import Items from '@/components/Items'
// mixins
import indexMixin from '@/mixins/indexMixin'

export default {
  name: 'App',
  components: {Items, Actions},
  mixins: [indexMixin],
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

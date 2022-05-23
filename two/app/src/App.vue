<template>
  <div id="app">
    <div class="row">
      <div class="col-6">
        <ul class="default">
          <li class="d-item" v-for="item in defaultItems" :key="item" @blur="getfocus(item)">

            <div class="card text-dark mb-2" :class="getColor(item)" style="max-width: 18rem;">
              <button type="button" class="close" @click="removeItem(item)" aria-label="Close">X</button>

              <div class="card-body">
                <p class="card-text">{{ item }}</p>
              </div>
            </div>

          </li>
        </ul>
      </div>

      <div class="col-2">
        <ul>
          <li v-for="action in btnActions" :key="action">
            <button class="actions">{{ action }}</button>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      defaultItems: [
        'Blue',
        'Orange',
        'Green',
        'Grey',
        '#000000',
      ],
      btnActions: [
        'Move',
        'Delete',
        'Copie',
        'Reference',
      ]
    }
  },
  components: {},
  methods: {
    getColor(color) {
      let booColor = {
        Blue: 'bg-primary',
        Orange: 'bg-warning',
        Green: 'bg-success',
        Grey: 'bg-light',
      }

      return booColor[color] ? booColor[color] : 'bg-dark'
    },

    getfocus(elt) {
      console.log(elt)
    },
    removeItem(elt) {
      console.log(this)
      console.log(elt)
      this.defaultItems.splice(this.defaultItems.indexOf(elt), 1);

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

.default {
  background-color: #333F50;
}
li {
  list-style: none;
}
.default > li {
  display: inline-block;
  padding: 10px;
}

.card {
  display: inline-block;
}

.card-body {
  padding: 30px;
}

.card-text {
  border: 1px solid black;
  margin-top: 36px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
}

.close {
  left: 115px;
  white-space: normal;
  position: absolute;
  top: 4px;
  border: 1px solid #BCBCBC;
  color: #BCBCBC;
}
</style>

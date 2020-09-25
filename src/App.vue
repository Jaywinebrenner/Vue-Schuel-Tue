<template>
  <div id="app">
      <div :class="classObject">{{value}}</div>
       <button type="button" @click="value++">PLUS</button>
      <button type="button" @click="value--">MINUS</button>
      <button type="button" @click="error = ! error">Change Red</button>
      <button type="button" @click="warning = ! warning">change Yellow</button>
  </div>
</template>

<script>


export default {
  name: 'App',

  data: function() {
    return {
      error: false,
      warning: false,
      value: 1,
    }
  },
  computed: {
    classObject: function() {
      return { 
        'red-error' : this.value > 10, 
        'yellow-warning' : this.warning }
    }
  }

}
</script>

<style>
body {
  font-size: 50px;
  text-align: center;
  padding-top: 100px;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.red-error {
  background-color: darkred;
}
.yellow-warning {
  background-color: yellow;
}
</style>

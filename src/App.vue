<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Header,
    Main
  }
}
</script>

<style>
*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  display: grid;
  grid-template-columns: 1fr;
}
</style>

<template>
  <header class="header">
    <h1>NASA <span>astronomy photo of the day</span></h1>
    <div>
      <h3>today</h3>
      <h3>all month</h3>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped>

h3 {
  color: lightgrey;
  display: inline;
}

span {
  padding-left: 5px;
  color: grey;
}

.header {
  color: white;
  padding: 10px 30px 10px 30px;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
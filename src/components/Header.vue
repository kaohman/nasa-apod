<template>
  <header class="header">
    <div>
      <h1>NASA</h1>
      <h2>astronomy photo of the day</h2>
    </div>
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
.header {
  color: white;
  padding: 30px 30px 10px 30px;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

h1 {
  margin-bottom: 10px;
}

h2 {
  margin-top: 0;
}

</style>
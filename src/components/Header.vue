<template>
  <div class="header">
    <div>
      <h1>NASA</h1>
      <h2>astronomy photo of the day</h2>
    </div>
    <div>
      <h3>today</h3>
      <h3>all month</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.header {
  padding: 30px 30px 10px 30px;
  background-color: rgba(100, 100, 100, 0.6);
  display: flex;
  justify-content: space-between;
}

h1 {
  color: #32BFEC;
  margin-bottom: 10px;
}

h2 {
  color: #32BFEC;
  margin-top: 0;
}

</style>
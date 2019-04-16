<template>
  <header class="header">
    <h1>NASA <span>astronomy photo of the day</span></h1>
    <div>
      <button 
        v-on:click="changePage" 
        v-bind:class="{'active':(page === 'today')}" 
        id="today"
      >
        today
      </button>
      <button 
        v-on:click="changePage" 
        v-bind:class="{'active':(page === 'month')}" 
        id="month"
      >
        this month
      </button>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',

  data: function() {
    return {
      page: 'today'
    }
  },

  methods: {
    changePage: function(e) {
      this.page = e.target.id
    }
  }
}
</script>

<style scoped>

span {
  padding-left: 5px;
  color: grey;
}

button {
  margin: 32px 10px 0 10px;
  font-size: 20px;
  color: grey;
  border: none;
  background: none;
}

button:hover {
  color: white;
}

.active {
  color: white;
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
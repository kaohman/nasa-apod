<template>
  <div class="apod">
  </div>
</template>

<script>
import Vue from 'vue';

Vue.component('apod-card', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<div class="apod"></div>'
})

export default {
  name: 'Apod'
}
</script>

<style scoped>

</style>
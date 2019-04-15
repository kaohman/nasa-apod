<template>
  <div class="apod-container">
  </div>
</template>

<script>
import Apod from './Apod';
import { fetchData } from '../utils/api.js';

export default {
  name: 'ApodContainer',

  components: {
    Apod
  },

  mounted: function() {
    this.getImage()
  },

  methods: {
    getImage: async function() {
      // await fetchData();
    }
  }
}
</script>

<style scoped>

</style>
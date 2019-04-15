<template>
  <div class="apod-details">
    <img class="apod-img" v-bind:src="image.url" alt="nasa astronomy photo of the day"/>
    <div class="details-text">
      <h4>{{ image.title }}</h4>
      <h5>{{ image.copyright }}</h5>
      <p>{{ image.explanation }}</p>
    </div>
  </div>
</template>

<script>
import Apod from './Apod';
import { fetchData } from '../utils/api.js';

export default {
  name: 'ApodDetails',

  components: {
    Apod
  },

  data: function () {
    return {
      image: {}
    }
  },

  mounted: async function() {
    this.image = await this.getImage();
  },

  methods: {
    getImage: async function() {
      const image = await fetchData();
      return image;
    }
  }
}
</script>

<style scoped>
.apod-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.details-text {
  color: white;
  right: 50%;
  width: 60%;
  margin-right: -30%;
  position: fixed;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: justify;
  bottom: 0px;
}

h4 {
  margin: 0 0 10px 0;
  font-size: 22px;
}

h5 {
  margin-top: 0;
  font-size: 14px;
}

p {
  margin-bottom: 0; 
  font-size: 14px;
}

</style>
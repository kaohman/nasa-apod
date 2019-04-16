<template>
  <div class="apod-details">
    <button v-if="this.day > 1" v-on:click="getNewImage" id="prev"></button>
    <button v-if="this.day < this.currentDay" v-on:click="getNewImage" id="next"></button>
    <img v-if="image.media_type === 'image'" class="apod-img" v-bind:src="image.url" alt="nasa astronomy photo of the day"/>
    <div class="video-container" v-else>
      <iframe class="apod-img video" v-bind:src="image.url" alt="nasa astronomy photo of the day"/>
    </div>
    <button v-on:click="hidden = false" v-if="hidden" class="show details">show caption</button>
    <div v-else class="details-text">
      <h4>{{ image.title }}</h4>
      <h5>{{ image.copyright }}</h5>
      <p>{{ image.explanation }}</p>
      <button v-on:click="hidden = true" class="hide details">hide caption</button>
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
      image: {},
      hidden: true,
      day: 1,
      currentDay: 1
    }
  },

  mounted: async function() {
    this.image = await this.getImage();
    this.day = parseInt(this.image.date.substring(8, 10));
    this.currentDay = parseInt(this.image.date.substring(8, 10));
  },

  methods: {
    getImage: async function(date) {
      return await fetchData();
    },
    getNewImage: async function(e) {
      if (e.target.id === 'prev') {
        this.day = this.day - 1;
      } else if (e.target.id === 'next') {
        this.day = this.day + 1;
      } else {
        return
      }
      const newDate = this.image.date.substring(0, 8) + this.day;
      this.image = await fetchData(newDate);
    }
  }
}
</script>

<style scoped>

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

.apod-img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  border: none;
}

.video-container {
  width: 100%;
  background-color: black;
}

.video {
  margin-top: 15vh;
  height: 85vh;
}

.details-text {
  color: white;
  right: 50%;
  width: 60%;
  margin-right: -30%;
  position: fixed;
  padding: 20px 20px 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: justify;
  bottom: 0px;
  box-shadow: 2px 2px 8px black;
  transition: all 0.5s slide;
}

.details {
  width: 100px;
  color: grey;
  font-size: 12px;
  padding: 5px;
  background-color: black;
  border: 2px solid grey;
  border-radius: 10px;
  box-shadow: 2px 2px 8px black;
}

.details:hover {
  color: white;
  border-color: white;
}

.show {
  position: fixed;
  right: 50%;
  bottom: 0%;
  margin-bottom: 10px;
  margin-right: -50px;
}

.hide {
  display: block;
  margin: 10px auto 0 auto;
}

#prev,
#next {
  position: fixed;
  height: 50px;
  width: 50px;
  border: none;
  top: 50%;
  z-index: 10;
}

#prev {
  background: url('../icons/back-arrow.svg');
  background-size: cover;
}

#prev:hover {
  background: url('../icons/back-arrow-hover.svg');
  background-size: cover;
}

#next {
  margin-left: 96%;
  background: url('../icons/forward-arrow.svg');
  background-size: cover;
}

#next:hover {
  background: url('../icons/forward-arrow-hover.svg');
  background-size: cover;
}

</style>
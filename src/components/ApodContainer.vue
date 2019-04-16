<template>
  <div class="apod-container">
    <div 
      v-for="card in cards" 
      :key="card.date" 
      :style="[(card.media_type === 'video') ? { backgroundImage: `url('https://apod.nasa.gov/apod/image/1903/rolando-ligustri-C2018Y1_190227_FB_1551288721_800.jpg')` } : {backgroundImage: `url('${card.url}')`} ]"
      class="card-photo"
      v-on:click="showDetails"
    >
      <h4>{{ card.title }}<span v-if="card.media_type === 'video'"> (video)</span></h4>
    </div>
  </div>
</template>

<script>
import { fetchData } from '../utils/api.js';

export default {
  name: 'ApodContainer',

  data: function() {
    return {
      currentDay: 15,
      cards: []
    }
  },

  mounted: function() {
    this.getCards()
  },

  methods: {
    getCards: async function() {
      for (let i = 1; i <= this.currentDay; i++) {
        const date = `2019-04-${i}`;
        this.cards.push(await fetchData(date))
      }
    },
    showDetails: function() {
      
    }
  }
}
</script>

<style scoped>

h4 {
  margin: 10px;
  font-size: 18px;
  color: white;
  text-shadow: 1px 1px 3px black;
}

.apod-container {
  padding-top: 16vh;
  padding-bottom: 30px;
  background-color: black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  justify-content: center;
  grid-gap: 20px;
}

.card-photo {
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}

</style>
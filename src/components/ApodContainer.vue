<template>
  <div class="apod-container">
    <div 
      v-for="card in cards" 
      :key="card.date" 
      :id="card.date"
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
      currentYear: new Date().getFullYear().toString().padStart(4, '0'),
      currentMonth: (new Date().getMonth() + 1).toString().padStart(2, '0'),
      currentDay: new Date().getDate().toString().padStart(2, '0'),
      cards: []
    }
  },

  mounted: function() {
    this.getCards()
  },

  methods: {
    getCards: async function() {
      for (let i = 1; i <= this.currentDay; i++) {
        const date = `${this.currentYear}-${this.currentMonth}-${i}`;
        this.cards.push(await fetchData(date))
      }
    },
    showDetails: function(e) {
      this.$emit('details-date', e.target.id)
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

@media screen and (max-width: 650px) { 
  .apod-container {
    padding-top: 19vh;
  }
}

</style>
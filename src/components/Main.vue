<template>
  <div class="main">
    <ApodContainer 
      v-if="page === 'month'"
      v-on:details-date="changeDetailsShown"
    ></ApodContainer>
    <ApodDetails 
      :key="date"
      v-else
      v-bind:date="date"
      v-on:details-date="changeDetailsShown"
    ></ApodDetails>
  </div>
</template>

<script>
import ApodContainer from './ApodContainer';
import ApodDetails from './ApodDetails';

export default {
  name: 'Main',

  props: {
    page: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    }
  },

  components: {
    ApodContainer,
    ApodDetails
  },

  methods: {
    changeDetailsShown: function(newDate) {
      this.$emit('details-date', newDate);
      this.$emit('change-page', 'details');
    }
  }
}
</script>

<style scoped>

</style>

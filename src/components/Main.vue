<template>
  <div class="main">
    <ApodDetails v-if="details" />
    <ApodContainer v-else />
  </div>
</template>

<script>
import ApodContainer from './ApodContainer';
import ApodDetails from './ApodDetails';

export default {
  name: 'Main',
  data: function() {
    return {
      details: false
    }
  },
  components: {
    ApodContainer,
    ApodDetails
  }
}
</script>

<style scoped>

</style>

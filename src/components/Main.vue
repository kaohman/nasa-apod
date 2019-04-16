<template>
  <div class="main">
    <ApodContainer v-if="page === 'month'"></ApodContainer>
    <ApodDetails v-else></ApodDetails>
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

<template>
  <div class="main">
    <ApodDetails />
  </div>
</template>

<script>
import ApodContainer from './ApodContainer';
import ApodDetails from './ApodDetails';

export default {
  name: 'Main',
  components: {
    ApodContainer,
    ApodDetails
  }
}
</script>

<style scoped>

</style>

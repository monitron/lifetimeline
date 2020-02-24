<template>
  <div id="app">
    <Timeline></Timeline>
  </div>
</template>

<script>
import Timeline from './components/Timeline.vue'

export default {
  name: 'App',
  components: {
    Timeline
  },
  created() {
    this.$store.dispatch('loadEverything');
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>

<template>
  <div id="app">
    <Timeline></Timeline>
    <EventEditor></EventEditor>
  </div>
</template>

<script>
import Timeline from './components/Timeline.vue'
import EventEditor from './components/EventEditor.vue'

export default {
  name: 'App',
  components: {
    Timeline,
    EventEditor
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

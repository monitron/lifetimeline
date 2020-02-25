<template>
  <div class="timeline">
    <Event v-for="event in events" v-bind="event" :key="event.id"></Event>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Event from './Event.vue'

export default {
  components: {
    Event
  },
  computed: mapState(['events'])
}
</script>
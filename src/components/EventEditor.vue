<template>
  <div class="event-editor" v-show="visible">
    <h2>Edit Event</h2>
    <label>Name
      <input />
    </label>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('eventEditor')

export default {
  computed: mapState({
    visible: 'editing'
  })
}
</script>
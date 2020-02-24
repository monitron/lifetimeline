<template>
  <div class="event">
    {{date}}: {{name}}
    <a href="#" v-on:click="edit(id)">edit</a>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ["id", "name", "date"],
  methods: mapMutations({
    edit: 'eventEditor/startEditing'
  })
}
</script>
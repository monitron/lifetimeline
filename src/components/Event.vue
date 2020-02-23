<template>
  <div class="event">{{date}}: {{name}}</div>
</template>

<script>
export default {
  props: ["name", "date"]
}
</script>
<template>
  <div>
    <span>{{ description }}</span>
  </div>
</template>

<script>
export default {
  name: "todoComponent",
  props: {
    description : String
  }
}
</script>

<style scoped>
  @import "../../public/styles/todoComponent.css";
</style>

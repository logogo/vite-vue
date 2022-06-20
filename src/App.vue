<template>
  <div class="red">hello vite vue2.0</div>
</template>

<script>

export default {
  mounted(){
    console.log(import.meta.env)
  }
}
</script>


<style scoped>
  .red {
    color: green;
  }
</style>

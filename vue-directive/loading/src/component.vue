<template>
  <div class='wrapper'>
      {{title}}
  </div>
</template>
<script>
  export default {
    props: ["title"]
  }
</script>
<style lang='scss' scoped>
  .wrapper {
    width:300px;
    height:300px;
    border: 1px solid lightblue;
  }
</style>
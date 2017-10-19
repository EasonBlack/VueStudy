<template>
  <div class='box__container'
    :style='{
      top: box.currentTop + "px",
      left: box.currentLeft + "px"
    }'
    @mousedown.prevent.stop='mouseDownHandle'>
  </div>
</template>
<script>
  export default {
    props: ['box'],
    methods: {
      mouseDownHandle(e) {
        this.$emit('mouseDownHandle', {e, id: this.box.id})
      }
    }
  }
</script>
<style lang='scss' scoped>
  .box__container {
    position:absolute;
    width:200px;
    height:150px;
    border:1px solid #ccc;
    border-radius: 10px;
  }
</style>
<template>
  <div class='grid-col__container'
    :class='["col__span_"+ colspan, "offright__span_" + offright, "offleft__span_"+offleft]'
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      colspan: Number, 
      offleft: {
          default: '0'
      },
      offright: {
          default: '0'
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>
<style lang='scss' scoped>
  $spans: (0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24);
  @each $size in $spans {
    .col__span_#{$size}  { 
      width:  #{(100/24) * $size}% !important; 
    }
    .offright__span_#{$size} {
      margin-right:  #{(100/24) * $size}% !important; 
    }
    .offleft__span_#{$size} {
      margin-left:  #{(100/24) * $size}% !important; 
    }
  }

  .grid-col__container {
    position:relative;
    width:100%;
    height:100%;
  }


</style>
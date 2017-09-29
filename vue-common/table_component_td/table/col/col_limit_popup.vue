<template>
  <div class='col'>
    <div class='content'>{{value}}</div>
    <div class='mask'></div>
    <div class='eclipse' @click='popup'>....</div>
    <div class='popup' ref='box' v-if='isPopup' 
      :class='[popDownUp]'
      :style='{
        top: popTop + "px",
        left: popLeft + "px"
      }'
    >
      {{value}}
    </div>
  </div>
</template>
<script>
export default { 
  props:['value'],
  data() {
    return {
      isPopup: false,
      popTop: null,
      popLeft: null,
      popDownUp: ''
    }
  },
  methods: {
    popup(e) {
     
      console.log(e);
      this.isPopup = !this.isPopup;
     
      this.$nextTick(function () {
        if(this.$refs.box) {
          console.log(this.$refs.box.clientHeight);
          
          if(e.clientY - (this.$refs.box.clientHeight + 2 + 15) <= 0) {
            this.popTop = 15 + e.offsetY;
            this.popDownUp = 'down';
          } else {
            this.popTop = -5 - this.$refs.box.clientHeight;
            this.popDownUp = 'up';
          }
          this.popLeft = 0;
        }
       
      })
     
    }
  }
}
</script>
<style lang='scss' scoped>
.col {

  white-space:nowrap;
  position:relative;
  display:flex;
  .content {
    overflow:hidden;
  }
  .mask {
    flex:1;
    background-color: white;
    z-index: 400;
  }
  .eclipse {
    position: absolute;
    right:0;
    background-color: white;
    cursor:pointer;
  }
  .popup {
    position:absolute;
    width: 180px;
    background-color: grey;
    border: 1px solid grey;
    color:white;
    border-radius: 5px;
    padding: 10px 10px;
    height: auto;
    z-index:999;
    white-space: normal;
    word-break: normal;
    &.down:after {
      content: ' ';
      position: absolute;
      right: 10px;
      top: -18px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      border-bottom: 10px solid grey;
    }
    &.up:after {
      content: ' ';
      position: absolute;
      right: 10px;
      bottom: -18px;
      width: 0;
      height: 0;
      border-top: 10px solid grey;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }

  }
}
</style>
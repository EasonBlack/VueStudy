<template>
  <div class='tab__container'>
    <div class='tab__section' v-for='(item, $index) in items' :key='$index' 
      :class='{
        "l-line": $index!=0,
        "r-line": $index!=items.length-1
      }'
    >
      <div class='tab__section_num-wrapper'>
         <div class='tab__section_num'
          :class='{checked: $index < currentNum}'
         >
          <span v-if='$index >= currentNum'>{{$index + 1}}</span>
        </div> 
      </div>
      <div class='tab__section_title'>
        {{item.title}}
      </div> 
    
    </div> 
  </div> 
</template>
<script>
  export default {
    data() {
      return {
        currentNum: 2,  //control the tab
        items : [
          {title: 'Tab 1', checked: true},
          {title: 'Tab 2'},
          {title: 'Tab 3'},
        ]
      }
    }
  }
</script>
<style scoped lang='scss'>
$rowHeight: 80;
$numHeight: 40;
.tab__container {
  display: flex;
  width:100%;
  height:#{$rowHeight}px;
}

.tab__section {
  flex: 1;
  display:flex;
  align-items:center;
  justify-content: center;
  &.l-line:before {
    position: absolute;
    top:calc(50% - 1px);
    left:0;
    content: '';
    height:2px;
    width:50%;
    background-color:grey;
  }
   &.r-line:after {
    position: absolute;
    top:calc(50% - 1px);
    left:50%;
    content: '';
    height:2px;
    width:50%;
    background-color:grey;
  }
}

.tab__section_num-wrapper {
  width: #{$rowHeight}px;
  height: #{$rowHeight}px;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:10;
  background-color:white;
}

.tab__section_num {
  width: #{$numHeight}px;
  height: #{$numHeight}px;
  line-height:#{$numHeight}px;
  text-align:center;
  border-radius: 50%;
  color: white;
  background-color: steelblue;
  position:relative;
  &.checked:after {
    content: '';
    position: absolute;
    left: 12px;
    top: 11px;
    width: 15px;
    height: 10px;
    transform: rotate(-45deg);
    border-left: 2px solid white;
    border-bottom: 2px solid white;
  }
}

.tab__section_title {
  height:#{$rowHeight}px;
  display:flex;
  align-items:center;
  position:relative;
  z-index:10;
  padding-right: 10px;
  background-color:white;
 
}

</style>
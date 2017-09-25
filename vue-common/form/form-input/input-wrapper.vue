<template>
  <div class='input__wrapper' :style='{margin: "0 "+ marginauto}'>
    <label class='input__title'
      :class='{
        single : !isMulti,
        multi: isMulti
      }'
    >
      {{title}}
    </label>
    <div class='input__content'>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", 'isMulti', 'marginauto'],
  inject: ['$validator'],
  data() {
    return {}
  }
}
</script>
<style scoped lang='scss'>
.input__wrapper {
  display: flex;
  width: 100%;
  padding: 5px;

  position: relative;
}

.input__title {
  margin-right: 30px;
  width: 100px;
  text-align: right;
  display: flex;
  
  justify-content: flex-end;
  &.single {
    align-items: center;
  }
  &.multi {
    padding-top:17px;
  }
}

.input__content {
  height: 100%;
  flex: 1;
}
</style>
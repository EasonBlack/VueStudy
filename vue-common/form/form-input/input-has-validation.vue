<template>
  <div class='input__container'>
    <input :value="value" @input="$emit('input', $event.target.value)"
            v-validate="validator"  :name='inputName'/>
    <span class='input__error-message' v-show="errors.has(inputName)">{{ errors.first(inputName) }}</span>
  </div>
</template>
<script>
export default {
  props: ['value', 'inputName', 'validator'],
  inject: ['$validator'],
  data() {
    return {}
  }
}
</script>
<style scoped lang='scss'>
//10 30 10 component-height
.input__container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:10px 0;
}

input {
  height: 30px;
  padding: 5px;
}

.input__error-message {
  color: red;
  position: absolute;
  top: 41px;
}
</style>
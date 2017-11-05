<template>
  <div>
      This is a component {{message}}
  </div>
</template>

<script>
  import Vue from 'vue'
  export default Vue.component('detail', {
    data() {
      return {
        message:'xxxxx'
      }
    }
  })
</script>
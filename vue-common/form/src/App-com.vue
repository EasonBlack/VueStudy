<template>
  <div class='view__container'>
    <component :is="com" />
  </div>
</template>
<script>
  import demo1 from './form-demo1.vue';
  export default {
    components: {demo1},
    data() {
      return {
        com: null
      }
    },
    created() {
      this.com = this.$route.params.name;
      console.log(this.com);
    }
  }
</script>
<style>
  .view__container {
    width:100%;
    height:100%;
  }
</style>
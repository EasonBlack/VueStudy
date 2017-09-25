<template>
  <div class='view__container'>
    <component :is="com" />
  </div>
</template>
<script>
  import tab1demo from '../center-tab-with-link/index.vue';
  export default {
    components: {tab1demo},
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
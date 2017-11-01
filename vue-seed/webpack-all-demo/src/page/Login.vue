<template>
  <div>
    <h1>This is Login Page</h1>
    <button @click='login'>Confirm</button>
  </div>
</template>
<script>
  export default {
    methods: {
      login() {
        this.$router.push('/app');
      }
    }
  }
</script>
<style lang='scss' scoped> 
</style>
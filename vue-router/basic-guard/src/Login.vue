<template>
  <div>
    <h2>Login Page</h2>
    <button @click='login'>Login</button>
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

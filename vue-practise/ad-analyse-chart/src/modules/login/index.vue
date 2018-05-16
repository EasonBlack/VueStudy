<template>
   	<div class='w-100 h-100 d-flex justify-content-center align-items-center'>
       <button class='btn btn-primary' @click='login()'>Login</button>
    </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ path: "app/campaign" });
    }
  }
};
</script>


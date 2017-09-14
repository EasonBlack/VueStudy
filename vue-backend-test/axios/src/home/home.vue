<template>
  <div class="container mt-5">
    <div class="row mb-3">
      <div class="col-12">
        <button @click="onGetHandle">Test Get</button>
      </div>
    </div>
    <div class="row ">
      <div class="col-12">
        <pre id="json">

        </pre>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        state: '',
        resJson: {}
      }
    },
    beforeRouteEnter (to, from, next) {
      axios.defaults.headers.common['token'] = 'aaaaaa';
      next(vm=>vm.state = 'finish enter')
    },
    methods: {
      onGetHandle() {
        axios.get('../data.json')
          .then(res=> {
              //this.resJson = JSON.stringify(res, undefined, 2);
            document.getElementById("json").innerHTML = JSON.stringify(res, undefined, 2);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
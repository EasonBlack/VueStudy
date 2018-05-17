<template>
	<div id="app">
        <random-num-image :identifyCode='identifyCode'></random-num-image>
	</div>
</template>

<script>
import randomNumImage from "../random-num-image/index.vue";
export default {
  name: "app",
  components: { randomNumImage },
  data() {
    return {
        identifyCodes: "1234567890",
        identifyCode: ''
    };
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  },
  mounted() {
      this.makeCode(this.identifyCodes, 4);
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial;
}

#app {
  min-height: 100vh;
  background-color: #efefef;
  padding-top: 50px;
  padding-left: 50px;
}

.button__container {
  margin-bottom: 10px;
}
</style>
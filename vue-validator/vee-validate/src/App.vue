<template>
	<div >
        <page1 />
        <page2 />
	</div>
</template>

<script>
import page1 from "./_page1.vue";
import page2 from "./_page2.vue";
export default {
  components: { page1, page2 }
};
</script>

<style lang='scss'>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial;
}

.main__container {
  padding: 20px;
}

.row {
    margin-bottom:10px;
}

input.is-danger {
  border-color: #ff3860;
}

.help.is-danger {
  color: #ff3860;
}
</style>
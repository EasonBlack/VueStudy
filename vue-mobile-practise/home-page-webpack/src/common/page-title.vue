<template>
    <div class="container">
          <div class='header-left'><slot  name="left"></slot></div>
          <span class='glyphicon glyphicon-triangle-bottom'></span>
          <h1 v-on:click='titleEvent'>{{title}}</h1>
          <div class='header-right'><slot name="right"></slot></div>

    </div>
</template>

<script>

    export default{
        props: ['title'],
		data() {
			return {
			}
		},
		methods: {
		    titleEvent:function(){
		        this.$emit('titleEvent');
		    }
		}
    }
</script>

<style scoped>
    .container {
        position:fixed;
        width:100vw;
        height:80px;
        line-height:80px;
        text-align:center;
        display:block;
        background-color:white;
        border-bottom: 1px solid grey;
    }
    .container h1 {
        display: inline-block;
    }
    .header-left {
        color: red;
        float:left;
    }
    .header-right {
        color: green;
        float:right;
    }
</style>
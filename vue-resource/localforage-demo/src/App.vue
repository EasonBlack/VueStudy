<template>
	<div  class='main__container'>
       <list-wrapper></list-wrapper>
	</div>

</template>

<script>
    import listWrapper from './list.vue';
	export default {
        components: {listWrapper},
		data() {
			return {
			}
		},
		methods: {

		}
	}
</script>
<style lang='scss'>
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: Arial;
    }
    ul {
        list-style:none;
    }

    .main__container {
        height:100vh;
        width:100vw;
        background-color:#EFEFEF;
        position:relative;
        display:flex;
        overflow:hidden;
    }



</style>
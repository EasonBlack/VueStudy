<template>
	<div  class='main__container'>
        {{ $t("message.hello") }}
        {{message.hello}}
	</div>

</template>

<script>

	export default {

		data() {
			return {
                message: {hello: "xxxx"}
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
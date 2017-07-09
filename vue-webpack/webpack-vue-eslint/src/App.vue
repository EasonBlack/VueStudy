<template>
	<div class='main__container'>
	     <div>Hello World</div>
	     <div class='box'>
	         This is a demo for autoprefixer
	     </div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				message: 'hello'
			}
		},
		methods: {
		a() {
				this.message = 'xxxx'
			}
		}
	}
</script>
<style lang='scss' scoped>
    .main__container {
        display: flex
    }

    .box {
        width: 100px;
        height: 100px;
        background-color: #ccc;
        color: white;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }

</style>
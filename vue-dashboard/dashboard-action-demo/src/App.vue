<template>
    <div class='main'>
        <div class='header'></div>
        <div class='content'>
            <router-view></router-view>
        </div>
	</div>
</template>

<script>

	export default {

		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>
<style lang='scss' scoped>
    .main {
        width:100vw;
        height:100vh;
        position:relative;
    }
    .header {
        width:100%;
        height:40px;
        background-color: #ccc;
    }
    .content {
        width:100%;
        height: calc(100vh - 40px);
        position:relative;
    }
</style>
<template>
	<div  class='main__container'>
       <div class='chart__container'>
            <circle-chart :num="'75'"></circle-chart>
       </div>
	</div>

</template>

<script>
    import circleChart from '../circle-percentage/index.vue';
	export default {
	    components: {circleChart},
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

    .chart__container {
        width:200px;
        height:200px;
        display:flex;
    }

</style>
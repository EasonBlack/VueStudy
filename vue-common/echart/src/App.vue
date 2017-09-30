<template>
	<div  class='main__container'>
       <div class='chart__container'>
            <bar-simple></bar-simple>
       </div>
        <div class='chart__container'>
            <bar-demo1></bar-demo1>
        </div>
        <div class='chart__container'>
            <area-demo1></area-demo1>
        </div>
        <div class='chart__container'>
             <china-map-demo></china-map-demo>
         </div>
         <div class='chart__container'>
             <pie-demo/>
        </div>
	</div>

</template>

<script>

    import barSimple from '../bar-simple/index.vue';
    import barDemo1 from '../bar-demo-1/index.vue';
    import areaDemo1 from '../area-demo-1/index.vue';
    import chinaMapDemo from '../china-map-demo/index.vue';
    import pieDemo from '../pie-demo/index.vue';
	export default {
	    components: {barSimple, barDemo1, areaDemo1, chinaMapDemo, pieDemo},
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
        overflow:auto;
        flex-wrap: wrap;
    }

    .chart__container {
        width:400px;
        height:400px;
        display:flex;
    
    }

</style>
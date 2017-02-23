<template>
	<div id='main'>
	     <div :is='selectedLayout'></div>
         <div class='control'>
                <select v-model='selectedLayout'>
                    <option value='layout-left-right1'>Layout_left_right1</option>
                    <option value='layout-left-right2'>Layout_left_right2</option>
                </select>
         </div>
	</div>
</template>

<script>
    import layoutLeftRight1 from '../layout_left_right_1/index.vue';
    import layoutLeftRight2 from '../layout_left_right_2/index.vue';
	export default {
	    components: {layoutLeftRight1, layoutLeftRight2},
		data() {
			return {
                selectedLayout: null
            }
		},
		created: function(){


		},
        methods: {

        }
	}
</script>
<style lang='scss' >
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: Arial;
    }

    #main {
        width:100vw;
        height:100vh;
        background-color:#EFEFEF;
        position:relative;
    }

    .main__container {
        width:100%;
        height:100%;
        padding:20px;
    }

    .control {
        position:fixed;
        display:block;
        bottom:10px;
        left: calc(50vw - 100px);
        select {
            width:200px;
        }
    }


</style>
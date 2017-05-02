<template>
	<div id="app">
		<div class='button__container'>
            <example-button :item='item1' v-on:clickHandle='image1Handle'></example-button>
        </div>
        <div class='button__container'>
            <example-button :item='item2' v-on:clickHandle='image1Handle'></example-button>
        </div>

	</div>
</template>

<script>
    import exampleButton from '../example__icon-text_1/index.vue';
    import img1 from 'assets/icons/order.png'
    import img2 from 'assets/icons/Forward.png'
	export default {
	    name: 'app',
	    components: {exampleButton},
		data() {
			return {
                item1 : {
                    src:  img1,
                    text: "Add a Dataset"
                },
                item2 : {
                    src:  false,
                    text: "Back"
                }
			}
		},
		methods: {
		    image1Handle: function() {

		    }
		},
		created:function() {
            const test = {a: 1, b:2};
            let result = {...test};
            let {a, ...r} = {...test};
            console.log(result, r);
		}

	}
</script>
<style>
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: Arial;
    }

    #app {
        min-height:100vh;
        background-color:#EFEFEF;
        padding-top:50px;
        padding-left:50px;
    }

    .button__container {
        margin-bottom:10px;
    }


</style>
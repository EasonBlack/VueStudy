<template>
	<div id="app">
		<div class='card_container'>
            <example-card :item='item'></example-card>
        </div>
        <div  class='card_col_container'>
            <example-col-card :item='item'></example-col-card>
        </div>
	</div>
</template>

<script>
    import exampleCard from '../example__1/index.vue';
    import exampleColCard from '../example__col__1/index.vue';
	export default {
	    name: 'app',
	    components: {exampleCard, exampleColCard},
		data() {
			return {
                item : {
                    src:  "http://placehold.it/500x700&text=Item",
                    lvl1: "Dancing Party",
                    lvl2: "Donec facilisis tortor ut augue lacina, at vive",
                    lvl3: "2016.11.20"
                }
			}
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

	.card_container {
		width:300px;
		height:100px;
		margin-bottom:20px;
	}
	.card_col_container {
	    width:300px;
	    height:300px;
	    margin-bottom:20px;
	}
</style>
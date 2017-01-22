<template>
	<div id="app">
        <div class='card_container'>
            <example-card1 :item='item'></example-card1>
        </div>
		<div class='card_container'>
            <example-card :item='item'></example-card>
        </div>
        <div  class='card_col_container'>
            <example-col-card :item='item'></example-col-card>
        </div>
        <div class='card_auto_container'>
            <example-ul-card :item='item' :title="'Weather'"></example-ul-card>
        </div>
        <div class='card_auto_container' style='width:350px;'>
            <example-coupon :coupon='coupon' ></example-coupon>
        </div>
	</div>
</template>

<script>
    import exampleCard from '../example__1/index.vue';
    import exampleCard1 from '../example__card__1/index.vue';
    import exampleColCard from '../example__col__1/index.vue';
    import exampleUlCard from '../example__ul__1/index.vue';
    import exampleCoupon from '../example__coupon__1/index.vue';
	export default {
	    name: 'app',
	    components: {exampleCard,exampleCard1, exampleColCard, exampleUlCard, exampleCoupon},
		data() {
			return {
                item : {
                    src:  "http://placehold.it/500x700&text=Item",
                    lvl1: "Dancing Party",
                    lvl2: "Donec facilisis tortor ut augue lacina, at vive",
                    lvllong2: "aaaa aaa aaa a aaaaa aaa aaa aaaa aaa aaa a aaaaa aaa aaa aaaa aaa aaa a aaaaa aaa aaa aaaa aaa aaa a aaaaa aaa aaa aaaa aaa aaa a aaaaa aaa aaa aaa aaaaa aaaaa aaa aa a aaa aaa bbbb aaaaa aaa aa bbb",
                    lvl3: "2016.11.20",
                    bgc: '#e9f964'
                },
                coupon: {
                    title: "2015盛夏来袭，重磅来袭！手快有，手慢无 ~",
                    detail: "XX 盛夏盛惠，重磅来袭！上千款单品，低至五折，限时抢购！",
                    src: "http://placehold.it/500x700&text=Item",
                    address: "XXX XXXX(XXX广场店)",
                    distance : "200m"

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
	.card_auto_container {
		width:300px;
		margin-bottom:20px;
	}
	.card_col_container {
	    width:300px;
	    height:300px;
	    margin-bottom:20px;
	}
</style>
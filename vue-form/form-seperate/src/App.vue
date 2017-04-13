<template>
	<div  class='main__container'>
        <basic1 :basic1='basic_1'></basic1>
        <basic2 :basic2='basic_2'></basic2>
        <basic3 :basic3='basic_3'></basic3>
        <a class='btn__save' @click='save'>Save</a>
	</div>
</template>

<script>
    import basic1 from './basic1.vue';
    import basic2 from './basic2.vue';
	export default {
        components: {basic1, basic2},
		data() {
			return {
			    basic_1 : {
			        name: '',
			        num: ''
			    },
			    basic_2 : {
			        b3: []
			    },
			    basic_3 : {}
			}
		},
		methods: {
            save() {
                let o = {
                    basic1: this.basic_1,
                    basic2: this.basic_2,
                    basic3: this.basic_3
                }
                console.log(o);
            }
		}
	}
</script>
<style lang='scss' scoped>
   @import '~$styles/global.scss';
   .btn__save {
     display:inline-block;
     padding:10px 20px;
     color:white;
     background-color: #{$primary}
   }
</style>
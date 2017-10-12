<template>
	<div class='main__container'>
        <div class='box' v-loading='info'>
            {{info}}
        </div>
        <div style='position:relative' v-loading='info'>
            {{info}}
        </div>
        <my-div :title='info' v-loading='info'></my-div>
	</div>
</template>

<script>

    import loading from '../directive/loading';
    import myDiv from './component.vue';
	export default {
        directives: {loading},
        components:{myDiv},
		data() {
			return {
                info: null
			}
        },
        created() {
            setTimeout(()=>{
                this.info = 'aaaaaaaaaaaa'
            },3000)
        }
	}
</script>
<style lang='scss' scoped>
    .box {
        width:300px;
        height: 300px;
        border: 1px solid steelblue;
    }

</style>
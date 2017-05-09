<template>
	<div class='main__container'>
	    <div class='section_small'>
            <flower @setWidget='setWidget'>
                <circleSvg  @setWidget='setWidget' :slot='slotName' :oldposition='oldposition' ></circleSvg>
            </flower>
	    </div>
	    <button></button>
	</div>
</template>

<script>
    import circleSvg from './components/circleSvg.vue'
    import flower from './components/flower/index.vue';
	export default {
        components:{circleSvg, flower},
		data() {
			return {
                slotName: 'tr',
                oldposition: ''
			}
		},
		watch: {
		    slotName: function(nv,ov) {
		        this.oldposition = ov;
		    }
		},
		methods: {
		    setWidget(po) {
                this.slotName = po;
		    }
		}
	}
</script>
<style lang='scss' scoped>
    .section_small {
        width:200px;
        height:200px;
        position:relative;
    }
</style>
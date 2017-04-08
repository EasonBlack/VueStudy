<template>
	<div class='panel__container'>
	    <select-panel :orgs='orgs' :results='results' :index='index' v-for='(i,index) in results.length' v-if='orgs.length '></select-panel>
	    <select-bottom @addSelect='addSelect'></select-bottom>
	</div>
</template>

<script>
    import selectPanel from './select-panel/index.vue';
    import selectBottom from './select-bottom/index.vue';
    import bus from './bus.js'
	export default {
	    components: {selectPanel, selectBottom},
		data() {
			return {
			    results: [],
			    orgs: null
			}
		},
		created: function() {
		     bus.$on('saveSelect', this.saveSelect)
		     bus.$on('editSelect', this.editSelect)
             this.$http.get('../data/org.json')
             .then((res)=>{
                this.orgs= res.body;
             })
		},
		methods: {
		    addSelect() {
		        if(!this.orgs.length) return;
		        if(this.results.length < this.orgs.length && !this.results.find(o=>o.active)) {
                    this.results.push({active: true});
		        } else {
		            console.log('has one active on screen, please finish it')
		            return false;
		        }
		    },
		    saveSelect(o) {
		        let index = o.index;
		        let name = o.org;
		        this.$set(this.results[index], 'active', false);
		        this.$set(this.results[index], 'name', name);
		    },

		    editSelect(o) {

		        let index = o.index;
                let name = o.org;
                this.$set(this.results[index], 'active', true);
		    }
		}
	}
</script>
<style lang='scss' scoped>
    .panel__container {
        width:50%;
        height:100%;
        overflow:auto;
        background-color: rgba(#ccc, 0.5);
    }
</style>
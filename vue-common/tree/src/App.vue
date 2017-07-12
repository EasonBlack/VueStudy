<template>
	<div  class='main__container'>
        <div class="row__section">
            <tree-wrapper :items="items"></tree-wrapper>
        </div>
        <div class="row__section">
            <tree-wrapper2 :items="items"></tree-wrapper2>
        </div>
	</div>
</template>

<script>
    import Vue from 'vue';
    import treeWrapper from '../tree__1/index.vue';
    import treeWrapper2 from '../tree__2/index.vue';

	export default {
        components: {treeWrapper, treeWrapper2},
		data() {
			return {
                items: []
			}
		},
        created() {
            Vue.http.get('../data.json').then((d) => {
                this.items = d.body;
            })
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

    .main__container {
        height:100vh;
        width:100vw;
        background-color:#EFEFEF;
        position:relative;
        display:flex;
        overflow:hidden;
    }

    .row__section {
        width:100%;
        height:50px;
        position:relative;
        padding:5px 10px;
    }
</style>
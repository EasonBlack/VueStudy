
<script>

    import base from '../list.base.vue';
    import {mapState} from 'vuex';
	export default {
        extends: base,
		data() {
			return {
			    getCategoryStr: 'getLitCategory',
                getkeyStr: 'getLitItems',
                getCollectionStr: 'getLitCollection',

                postCollectionStr: 'postLitCollection',
                postKeyStr: 'postLitItems',
                putCollectionStr: 'putLitCollection',
			}
        },
        computed: {
			...mapState({
                categoryItems: (state) => state.category.litCategory,
                keyItems : (state) => state.key.litItems
            })
		}
		
	}

</script>
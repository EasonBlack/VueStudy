
<script>
    import base from '../list.base.vue';
    import {mapState} from 'vuex';
	export default {
        extends: base,
		data() {
			return {
			    getCategoryStr: 'getItCategory',
                getkeyStr: 'getItItems',
                getCollectionStr: 'getItCollection',

                postCollectionStr: 'postItCollection',
                postKeyStr: 'postItItems',
                putCollectionStr: 'putItCollection',
                pageType: 'it'
			}
        },
        computed: {
			...mapState({
                categoryItems: (state) => state.category.itCategory,
                //keyItems : (state) => state.key.itItems
            })
		}
		
	}

</script>
<template>
	<div id="app">
		<ul>
		    <li v-for='item in items' v-on:click='toDetail(item.id)'>
		        <span>{{item.name}}</span><span>{{item.num}}</span>
		    </i>
		</ul>
	</div>
</template>

<script>
    import { mapState } from 'vuex'
	export default {
	    methods: {
	        toDetail: function(id) {
	            this.$router.push('/detail/' + id )
	        }
	    },
	    computed: {
	        ...mapState({
                items: state => state.items
            })
	    }
	}
</script>
<style>

</style>
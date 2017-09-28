<template>
	<div class='container' @mousemove='mouseMove' @mouseup='mouseUp'>
		<box v-for='(b , b_key) in boxes' :key='b_key' :boxid='b_key' :b='b' 
		/>
		<style-modal v-if='styleModalDisplay' />
		<button @click='setup'>Setup</button>
	</div>
	
</template>

<script>
import box from './components/box.vue';
import styleModal from './components/style-modal.vue';
import { mapState } from 'vuex';
export default {
	components: { box, styleModal },
	data() {
		return {
		}
	},
	methods: {
		
		mouseUp(e) {
			this.$store.commit('mouseUp');
		},

		mouseMove(e) {
			this.$store.commit('mouseMove',{e});
		},

		setup() {
			this.$store.dispatch('setup');
		}
		
	},
	computed: {
		...mapState({
			boxes: (state) => state.box.boxes,
			styleModalDisplay: (state) => state.box.styleModalDisplay
		}),
	}
}
</script>

<style lang='scss' scoped>
	button {
		position:fixed;
		bottom:20px;
		right:20px;
		width:100px;
		height:30px;
		line-height:30px;
		text-align:center;
	}
</style>

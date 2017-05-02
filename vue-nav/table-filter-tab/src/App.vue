<template>
	<div >
		<div class='nav-container' @click="toggleState">
			<div class='action-container' :class="{
		    	active: actionActive
			}">
			</div>
			<ul class='list' :class="{
		    	unactive: !actionActive,
		    	active: actionActive
			}">
				<li class='item' v-for="item in items">
					<span v-if="item.title=='Unread'">
						{{item.title + ' ' + times}}
					</span>
					<span v-else>
						{{item.title}}
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{title: "All"},
					{title: "Unread"},
					{title: "Read"},
					{title: "Starred"},
				],
				actionActive:false,
				times: 0
			}
		},
		methods:{
            toggleState() {
				this.times ++;
                this.actionActive = !this.actionActive
			}
		}
	}
</script>
<style scoped lang="scss">
	@import 'app.scss';
</style>
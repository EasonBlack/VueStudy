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
	.nav-container {
		background-color :  #F4F4F4;
		height :  40px;
		width :  100%;
		position :  relative;
		overflow:hidden;
	}
	.action-container {
		position :  absolute;
		width :  160px;
		height :  100%;
		background-color :  orange;
		margin-left: -160px;
		transition: all 0.3s ease;
		&.active {
			margin-left:0;
		}
	}

	.list {
		position :  absolute;
		height :  100%;
		display:flex;
		list-style:none;
		margin:0;
		align-items: center;
		transition: all 0.3s ease;
		&.unactive {
			left:0;
		}
		&.active {
			left: calc(100% - 520px);
		}

	}
	.item {
		height :  30px;
		width:100px;
		line-height :  30px;
		padding:0 5px;
		border-radius :  5px;
		background-color :  #FFF7F4;
		border :  1px solid #EB7057;
		margin-right:10px;
		text-align: center;
	}
</style>
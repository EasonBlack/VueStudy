<template>
	<div class="header__container">

	        <div class='right__account' @click='toggleHeaderDrop'>
	            Administrator Bradon
                <header-drop v-if='showHeaderDrop' />
	        </div>

	</div>
</template>

<script>
    import headerDrop from './headerDrop.vue';
	export default {
        components: {headerDrop},
		data() {
			return {
			    showHeaderDrop: false
			}
		},
		methods: {
            toggleHeaderDrop() {
                this.showHeaderDrop = !this.showHeaderDrop;
            }
		}
	}
</script>
<style lang='scss' scoped>
    .header__container {
        height:50px;
        line-height:50px;
        display:flex;
        justify-content: flex-end;
        background-color: steelblue;
    }

    .right__account {
        width:250px;
        height:100%;
        display:flex;
        padding-left:20px;
        align-items: center;
        border-left: 1px solid white;
        color: white;
    }

</style>
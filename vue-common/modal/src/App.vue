<template>
	<div>
        <div class='main__container' style='width:100%;height:100px;'>
            <button @click='toggleModal1'>Confirm</button>
            <modal1 v-if='modal1Show'  @close='toggleModal1'></modal1>
        </div>
	</div>
</template>

<script>
    import modal1 from '../modal_1/index.vue';
	export default {
        components: {modal1},
		data() {
			return {
                modal1Show: false
			}
		},
		methods: {
            toggleModal1() {
                this.modal1Show= !this.modal1Show;
            }
		},
		created:function() {

		}

	}
</script>
<style>
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: Arial;
    }

    #app {
        min-height:100vh;
        background-color:#EFEFEF;
        padding-top:50px;
        padding-left:50px;
    }

    .main__container {
        margin-top:20px;
        margin-bottom:20px;
        padding: 10px;
        background-color: #eee;
    }

    .flex__center {
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>
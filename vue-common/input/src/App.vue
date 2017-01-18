<template>
	<div>
        <div class='main__container' style='width:400px;height:40px;'>
            <example-input-row-select :title="'Name'"  v-model="newVal2"></example-input-row-select>
        </div>
		<div class='main__container' style='width:400px;height:40px;'>
            <example-input-row :title="'Name'"  v-model="newVal1"></example-input-row>
        </div>
        <div class='main__container' style='width:400px;height:40px;'>
            <example-input-row :title="'Num'"  v-model="newNum1"></example-input-row>
        </div>
       	<div class='main__container' style='padding-left:40px;'>
            <a class='btn' v-on:click='confirm'>Confirm</a>
        </div>
	</div>
</template>

<script>
    import exampleInputRow from '../example__label-input_1/index.vue';
    import exampleInputRowSelect from '../example__label-input-select_2/index.vue';
	export default {
	    components: {exampleInputRow, exampleInputRowSelect},
		data() {
			return {
                newVal1: '',
                newNum1: '',
                newVal2: ''
			}
		},
		methods: {
            confirm: function() {
                console.log(this.$data);
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
    }

    .btn {
        display:inline-block;
        color:white;
        background-color:steelblue;
        width:120px;
        height:30px;
        line-height:30px;
        text-align: center;
    }


</style>
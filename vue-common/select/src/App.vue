<template>
	<div  class='main__container'>
        <div class='row__section'>
            <cascade-select></cascade-select>
        </div>
        <div class='row__section'>
            <multi-value-select></multi-value-select>
        </div>
	</div>
</template>

<script>
    import cascadeSelect from '../cascade__select__1/index.vue';
    import multiValueSelect from '../multi_value_box__select/index.vue';
	export default {
	    components: {cascadeSelect, multiValueSelect},
		data() {
			return {


			}
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
        flex-direction:column;
        overflow:hidden;
    }

    .row__section {
        width:100%;
        height:50px;
        position:relative;
        padding:5px 10px;
    }
</style>
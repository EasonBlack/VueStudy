<template>
	<div  class='main__container'>
        <div class="row__section">
            <my-input :title="'AA'" :value="result.aa" v-model="result.aa"></my-input>
        </div>
        <div class="row__section">
            <my-select :title="'BB'" :value="result.bb" v-model="result.bb"  :items="items" :textkey="'title'" :valuekey="'value'"></my-select>
        </div>

        <button @click="save">Save</button>
	</div>
</template>

<script>
    import myInput from './my-input.vue';
    import mySelect from './my-select.vue';
	export default {
	    components: {myInput, mySelect},
		data() {
			return {
                items: [
                    {title: 'b1',value: '1'},
                    {title: 'b2',value: '2'},
                    {title: 'b3',value: '3'},
                    {title: 'b4',value: '4'}
                ],
                result : {}
			}
		},
		methods: {
            save() {
                console.log(this.result);
            }
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
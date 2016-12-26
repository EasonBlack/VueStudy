<template>
	<div id="app">
		<div class='table_container'>
            <example-table :columns='columns' :rows='rows'></example-table>
        </div>
	</div>
</template>

<script>
    import exampleTable from '../example__table__1/index.vue';
	export default {
	    name: 'app',
	    components: {exampleTable},
		data() {
			return {
                columns: [
                    {id:'id', name: 'ID'},
                    {id:'name', name: 'Name'},
                    {id:'state', name: 'State'}
                ],
                rows: [
                    {id: '1',name: 'aaa' , state: '1'},
                    {id: '2',name: 'bbb' , state: '2'},
                    {id: '3',name: 'ccc' , state: '3'},
                    {id: '4',name: 'ddd' , state: '4'},
                    {id: '5',name: 'eee' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'}
                ]
			}
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

	.table_container {
		width:500px;
		height:400px;
		overflow-y:auto;
		margin-bottom:20px;
	}

</style>
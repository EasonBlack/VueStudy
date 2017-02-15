<template>
	<div id="app">
	    <div class='pager_container'>
	         <table-pager :count='Math.ceil(rows.length/10)' :current="current"  @pagerHandle='pagerHandle'></table-pager>
	    </div>

        <div class='table_container'>
            <example-table-colmerge  :columns='columns' :rows='rows'></example-table-colmerge>
        </div>
		<div class='table_container'>
            <example-table :columns='columns' :rows='showRows'></example-table>
        </div>
        <div  class='table_container_2'>
            <example-table2 :columns='columns' :rows='showRows'></example-table2>
        </div>

	</div>
</template>

<script>
    import exampleTable from '../example__table__1/index.vue';
    import exampleTable2 from '../example__table__2__crud/index.vue';
    import exampleTableColmerge from '../example__table_colmerge/index.vue';
    import tablePager from '../pager__1/index.vue';
	export default {
	    name: 'app',
	    components: {exampleTable, exampleTable2,exampleTableColmerge, tablePager},
		data() {
			return {
			    current: 1,
                columns: [
                    {id:'id', name: 'ID'},
                    {id:'name', name: 'Name'},
                    {id:'state', name: 'STATE'}
                ],
                rows: [
                    {id: '1',name: 'aaa' , state: '1'},
                    {id: '2',name: 'bbb' , state: '2'},
                    {id: '3',name: 'bbb' , state: '3'},
                    {id: '4',name: 'ddd' , state: '4'},
                    {id: '5',name: 'ddd' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'}
                ]
			}
		},
		methods: {
		    pagerHandle:function(o) {
		        this.current = o.val;
		    }
		},
		computed: {
		    showRows: function() {
		       return this.rows.slice( (this.current-1) * 10,  (this.current-1) * 10 + 10 );
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
		margin-bottom:50px;
	}
	.table_container_2 {
	    width:500px;
	    margin-bottom:50px;
	}
	.pager_container {
        width:500px;
        margin-bottom:50px;
	}

</style>
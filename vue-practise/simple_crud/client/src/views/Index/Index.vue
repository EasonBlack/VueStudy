<template>
    <div class='main__container'>
        <app-table :columns='columns' :rows='rows'></app-table>
    </div>
</template>

<script>
    import appTable from '../../common/table/index.vue';
    export default{
        components: {appTable},
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
                    {id: '6',name: 'fff' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'},
                    {id: '6',name: 'fff' , state: '1'}
                ]
			}
		}
    }
</script>


<style lang='scss' scoped>
    .main__container {
        width:50%;
        margin-top:100px;
        height:600px;
        margin-left:auto;
        margin-right:auto;
        background-color:grey;
    }
</style>

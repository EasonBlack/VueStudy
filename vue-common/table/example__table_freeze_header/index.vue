<template>
    <table>
        <thead>
            <th v-for='col in columns'>{{col.name}}</th>
        </thead>
        <tbody>
        <template v-for='row in rows'>
            <tr>
                <td v-for='col in columns'>
                    {{row[col.id]}}
                </td>
            </tr>
        </template>
        </tbody>
    </table>
</template>

<script>
    import $ from 'jquery';
    export default{

        data(){
            return{
                columns: [
                    {id:'id', name: 'ID'},
                    {id:'name', name: 'Name'},
                    {id:'state', name: 'STATE'}
                ],
                rows: [
                    {id: '1',name: 'aaaaaaaaaaaaaaaaa' , state: '1'},
                    {id: '2',name: 'bbb' , state: '2222222    222222222'},
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
        mounted: function() {
            var $table = $(this.$el),
                $bodyCells = $table.find('tbody tr:first').children(),
                colWidth;

            colWidth = $bodyCells.map(function() {
                return $(this)[0].clientWidth;
            }).get();

            $table.find('thead th').each(function(i, v) {
                $(v).width(colWidth[i]);
            });
        }

    }
</script>

<style lang='scss' scoped>
    table {
        position:relative;
        border-spacing: 0;
        width:100%;
        tr {
            height:40px;
        }
        td {
            border-bottom:1px solid grey;
            border-right: 1px solid grey;
            min-width:100px;
            padding:0 10px;
        }
        th {
            border-bottom:1px solid grey;
            border-right: 1px solid grey;
            height:60px;
            line-height:60px;
        }
        thead {
            width:100%;
            display:block;
            border-top:1px solid grey;
            border-left: 1px solid grey;
        }
        tbody {
            width:100%;
            overflow:auto;
            display: block;
            height: 300px;
            border-left: 1px solid grey;
        }
    }

</style>

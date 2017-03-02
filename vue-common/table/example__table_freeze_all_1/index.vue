<template>
    <div class='table__wrapper'>
    <table id='f1'>
        <thead>
            <th v-for='col in columns'>{{col.name}}</th>
        </thead>
        <tbody @scroll='scrollHandle'>
            <tr  v-for='row in rows'>
                <td v-for='col in columns'>
                    {{row[col.id]}}
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default{

        data(){
            return{
                columns: [
                    {id:'id', name: 'ID'},
                    {id:'name', name: 'Name'},
                    {id:'state', name: 'STATE'},
                    {id:'state1', name: 'STATE1'},
                    {id:'state2', name: 'STATE2'},
                    {id:'state3', name: 'STATE3'}
                ],
                rows: [
                    {id: '1',name: 'aaaa aaaaaaaaaaaaaaaa' , state: '1', state1: '1', state2: '1', state3: '1'},
                    {id: '2',name: 'bbb' , state: '2', state1: '1', state2: '1', state3: '1'},
                    {id: '3',name: 'bbb' , state: '3', state1: '1', state2: '1', state3: '1'},
                    {id: '4',name: 'ddd' , state: '4', state1: '1', state2: '1', state3: '1'},
                    {id: '5',name: 'ddd' , state: '1', state1: '1', state2: '1', state3: '1'},
                    {id: '6',name: 'fff' , state: '1', state1: '1', state2: '1', state3: '1'},
                    {id: '6',name: 'fff' , state: '1', state1: '1', state2: '1', state3: '1'},
                    {id: '6',name: 'fff' , state: '1', state1: '1', state2: '1', state3: '1'},
                    {id: '6',name: 'fff' , state: '1', state1: '1', state2: '1', state3: '1'},
                    {id: '6',name: 'fff' , state: '1', state1: '1', state2: '1', state3: '1'},
                    {id: '6',name: 'fff' , state: '1', state1: '1', state2: '1', state3: '1'}
                ]
            }
        },
        methods: {
            scrollHandle: function() {
                $('#f1 thead').css("left", -$("tbody").scrollLeft()); //fix the thead relative to the body scrolling
                $('#f1 thead th:nth-child(1)').css("left", $("tbody").scrollLeft()); //fix the first cell of the header
                $('#f1 tbody td:nth-child(1)').css("left", $("tbody").scrollLeft());
            }
        },
        mounted: function() {
              var $table = $('#f1'),
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
    .table__wrapper {
        width:100%;
        height:100%;
        position:relative;

    }
    table {
        position: relative;
        width:500px;
        background-color: #aaa;
        overflow: hidden;
        border-spacing: 0;
        border-top: 1px solid #222;
        border-left: 1px solid #222;
    }

    /*thead*/
    thead {
        position: relative;
        display: flex;
        overflow: visible;
    }

    thead th {
        background-color: #99a;
        min-width: 120px;
        height: 32px;
        line-height:32px;
        border-bottom: 1px solid #222;
        border-right: 1px solid #222;
        display:inline-block;
    }

    thead th:nth-child(1) {/*first cell in the header*/
        position: relative;
        display: inline-block;
        background-color: #88b;
    }

    tbody {
        position: relative;
        display: block;
        width:  500px;
        height: 239px;
        overflow: scroll;
    }

    tbody td {
        background-color: #bbc;
        min-width: 120px;
        border-bottom: 1px solid #222;
        border-right: 1px solid #222;
        padding:0px 10px;
        height: 40px;
    }

    tbody tr td:nth-child(1) {  /*the first cell in each tr*/
        position: relative;
        display: block; /*seperates the first column from the tbody*/
        height: 40px;
        line-height:40px;
        background-color: #99a;
    }

</style>

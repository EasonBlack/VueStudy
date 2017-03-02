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
                    {id: '1',name: 'aaaaa' , state: '1', state1: '1', state2: '1', state3: '1'},
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
        width: 100%;
        background-color: #aaa;
        overflow: hidden;
        border-collapse: collapse;
        border-spacing: 0;
    }


    /*thead*/
    thead {
        position: relative;
        display: block; /*seperates the header from the body allowing it to be positioned*/
        width: 100%;
        overflow: visible;
    }

    thead th {
        background-color: #99a;
        min-width: 120px;
        height: 32px;
        border: 1px solid #222;
        display:inline-block;
    }

    thead th:nth-child(1) {/*first cell in the header*/
        position: relative;
        display: inline-block; /*seperates the first cell in the header from the header*/
        background-color: #88b;
    }


    /*tbody*/
    tbody {
        position: relative;
        display: block; /*seperates the tbody from the header*/
        width: 100%;
        height: 239px;

        overflow: scroll;
    }

    tbody td {
        background-color: #bbc;
        min-width: 120px;
        border: 1px solid #222;
    }

    tbody tr td:nth-child(1) {  /*the first cell in each tr*/
        position: relative;
        display: block; /*seperates the first column from the tbody*/
        height: 40px;
        background-color: #99a;
    }

</style>

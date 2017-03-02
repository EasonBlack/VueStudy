<template>
    <div class='table__wrapper'>
        <div class='table__scroll'  @scroll="scrollHandle">
            <table >
                <thead>
                <th class='frozen' :style="{minWidth:columns[0].width }"></th>
                <th  v-for='col in columns'
                    :style="{minWidth:col.width }"
                >
                    {{col.name}}
                </th>
                </thead>
                <tbody>
                <template v-for='row in rows'>
                    <tr>
                        <td class='frozen' :style="{minWidth:columns[0].width }">{{row[columns[0].id]}}</td>
                        <td v-for='col in columns'>
                            {{row[col.id]}}
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    import $ from 'jquery';
    export default{

        data(){
            return{
                 columns: [
                    {id:'id', name: 'ID', width:'100px'},
                    {id:'name', name: 'Name', width:'200px'},
                    {id:'state', name: 'STATE', width:'200px'},
                    {id:'state1', name: 'STATE1', width:'200px'},
                    {id:'state2', name: 'STATE2', width:'200px'},
                    {id:'state3', name: 'STATE3', width:'200px'},
                    {id:'state4', name: 'STATE4', width:'200px'},
                ],
                rows: [
                    {id: '1',name: 'aaa' , state: '1', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '2',name: 'bbb' , state: '2', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '3',name: 'bbb' , state: '3', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '4',name: 'ddd' , state: '4', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '5',name: 'ddd' , state: '1', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '2',name: 'bbb' , state: '2', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '3',name: 'bbb' , state: '3', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '4',name: 'ddd' , state: '4', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '5',name: 'ddd' , state: '1', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '2',name: 'bbb' , state: '2', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '3',name: 'bbb' , state: '3', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '4',name: 'ddd' , state: '4', state1: '1',state2: '1',state3: '1',state4: '1'},
                    {id: '5',name: 'ddd' , state: '1', state1: '1',state2: '1',state3: '1',state4: '1'},
                ]
            }
        },
        methods: {
            scrollHandle: function() {

            }
        },
        mounted: function() {

        }
    }
</script>

<style lang='scss' scoped>
    .table__wrapper {
        height:100%;
        width:100%;
        position:relative;
        overflow-x:auto;
        overflow-y: hidden;
    }
    .table__scroll {
        width:100%;
        height:100%;
        overflow:auto;
    }

    th.frozen {
        position:absolute;
        left:0;
        background-color:white;
        height:40px;
    }
    td.frozen {
        position:absolute;
        left:0;
        padding-top:10px;
        background-color:white;
        height:40px;
    }


    table {
        margin-left:100px;
        border-spacing: 0;
        dirction: rtl;
        td,th {
            height:40px;
        }

    }



</style>

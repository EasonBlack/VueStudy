<template>
    <div class='table__container'>
        <div class='table__title'>
            <div class='left'>Visitor</div>
            <div class='right'>
                <a class="tb__button btn__add" v-on:click="addActive=true">NEW</a>
            </div>
        </div>
        <div class='table__wrapper'>
        <table>
            <thead>
            <th v-for='col in columns'>{{col.name}}</th>
            <th>Action</th>
            </thead>
            <tbody>
            <template v-for='row in rows'>
                <tr>
                    <td v-for='col in columns'>
                        {{row[col.id]}}
                    </td>
                    <td>
                        <a class='tb__button btn__edit'>Edit</a>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
        </div>
        <add-panel :active='addActive' v-on:closeHandle="closeHandle"></add-panel>
    </div>
</template>

<script>
     import addPanel from './add_panel.vue';
     export default{
        components: {addPanel},
        props: ['columns', 'rows'],
        data(){
            return{
                addActive: false
            }
        },
        methods: {
            closeHandle:function(){
                this.addActive = false;
            }
        }

    }
</script>

<style lang='scss' scoped>
    .table__container {
        width:100%;
        position:relative;
        overflow:hidden;
    }
    .table__title {
        width:100%;
        height:40px;
        display:flex;
        background-color:#242E35;
        .left {
            display:flex;
            flex:1;
            justify-content : flex-start;
            align-items: center;
            padding:0 10px;
            font-size:1.1em;
            color:white;
        }
        .right {
            display:flex;
            flex:1;
            justify-content : flex-end;
            align-items: center;
            padding:0 10px;
        }
    }

    .table__wrapper  {
        width:100%;
        height:400px;
        overflow-y:auto;
    }

    table {
        width:100%;
        border-collapse:collapse;
        thead {
            background-color: steelblue;
            color: white;
        }
        tbody {
            background-color:white;
            tr {
                border-bottom: 1px solid  rgba(grey, 0.3) ;
            }
        }

        tr {
            height:40px;
        }
        th {
            padding: 10px 10px;
            text-align: left;
        }
        td {
            padding: 10px 10px;
        }

    }
    .tb__button {
        display:inline-block;
        width:60px;
        height:30px;
        line-height:30px;
        border-radius: 5px;
        text-align: center;
        color: white;
        font-size:0.8em;
        box-shadow: 0 -2px 0px 2px rgba(0, 0, 0, 0.1) inset;
        &:active {
            box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0.1) inset;
        }
    }

    .btn__edit {
        background-color: steelblue;
        &:hover {
            background-color: lightsalmon;
        }
    }
    .btn__add {
        background-color: rgba(salmon, 0.5);
        &:hover {
            background-color:rgba(salmon, 0.9);
        }
    }

</style>

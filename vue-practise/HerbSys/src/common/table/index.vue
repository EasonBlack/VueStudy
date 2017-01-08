<template>
    <div class='table__container'>
        <div class='table__title'>
            <div class='left'>{{title}}</div>
            <div class='right'>
                <a class="btn__add icon-plus" v-on:click="activeAdd"></a>
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
                        <a class='tb__button btn__edit' v-on:click="editHandle(row)">Edit</a>
                        <a class='tb__button btn__del' v-on:click="deleteHandle(row)">Delete</a>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
        </div>
        <div class='add-panel__container'
             v-bind:class="{
            active: addactive
         }">
            <slot name="addpanel"></slot>
        </div>
    </div>
</template>

<script>
     export default{

        props: ['title','columns', 'rows', 'addactive'],
        data(){
            return{

            }
        },
        methods: {
            activeAdd: function() {
                this.$emit('toggleAddPanel', {flag: true})
            },
            editHandle: function(item) {
                let _item = JSON.parse(JSON.stringify(item))
                this.$emit('editHandle', _item)
            },
            deleteHandle: function(item) {
                this.$emit('deleteHandle', item)
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
        height:60px;
        display:flex;
        background-color:white;
        .left {
            display:flex;
            flex:1;
            justify-content : flex-start;
            align-items: center;
            padding:0 10px;
            font-size:1.1em;
        }
        .right {
            display:flex;
            flex:1;
            justify-content : flex-end;
            align-items: center;
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
        width:60px;
        height:60px;
        line-height:60px;
        text-align:center;
        background-color: #00AECD;
        color: white;
        &:hover {
            background-color:rgba(#00AECD, 0.9);
        }
    }
    .btn__del {
        background-color: rgba(red, 0.5);
        &:hover {
            background-color:rgba(red, 0.9);
        }
    }
    .add-panel__container {
        width: 200px;
        height: 100%;
        background-color: rgba(grey, 0.6);
        position: absolute;
        left: -200px;
        top: 0;
        transition: all 0.3s ease;
        &.active {
            left: 0px;
        }
    }

</style>

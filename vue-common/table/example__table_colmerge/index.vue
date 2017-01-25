<template>
    <div class='table__container'>

        <div class='table__wrapper'>
        <table>
            <thead>
            <th v-for='col in columns'>{{col.name}}</th>
            </thead>
            <tbody>
            <template v-for='row in rows'>
                <tr>
                    <template v-for='col in columns'>
                        <td v-if='col.id == "name" && maintain.currentFlag!=row["name"]'
                            :rowspan="getColSpanNum(row['name'])">
                            {{row[col.id]}}
                        </td>
                        <td v-else-if='col.id!="name"'>{{row[col.id]}}</td>
                    </template>

                </tr>
            </template>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
     export default{
        props: ['columns', 'rows'],
        data(){
            return{
                maintain: {}
            }
        },
        created: function(){

        },
        methods: {
            getColSpanNum: function(name) {
                this.maintain.currentFlag = name;
                return this.rows.filter(r => r.name == name).length;
            }
        },


    }
</script>

<style lang='scss' scoped>
    .table__container {
        width:100%;
        position:relative;
        overflow:hidden;
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




</style>

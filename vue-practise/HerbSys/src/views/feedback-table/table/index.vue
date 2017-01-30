<template>

        <table cellspacing=0  cellpadding=0>
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
    export default {
        props: ['columns', 'rows'],
        data: function() {
            return {}
        }
    }
</script>

<style lang='scss' scoped>
     table {
            width:100%;
            border-collapse: collapse;
            tr {
                height:40px;
            }
     }
     thead {
        background-color: #00A2BF;
        color: white;
        height:40px;
        line-height:40px;
        th {
            padding-left:20px;
            text-align:left;

        }
     }
     tbody {
        tr {
            border-bottom: 1px solid rgba(grey, 0.2);
            &:hover {
                background-color: rgba(#00A2BF, 0.3);
               
            }
        }
        td {
             padding-left:20px;
             text-align:left;

        }
     }
</style>
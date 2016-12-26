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
    export default{
        props: ['columns', 'rows'],
        data(){
            return{

            }
        }

    }
</script>

<style lang='scss' scoped>
    table {
        width:100%;
        tr {
            height:40px;
        }
    }

</style>

<template>
    <div class='chart__container'>
        <div class='title__section'>{{title}}</div>
        <div class='table__container'>
            <table>
                <thead>
                <th></th>
                <th v-for='head in headers'>{{head}}</th>
                </thead>
                <tbody>
                <tr v-for='(cat,index) in categories'>
                    <td>{{cat}}</td>
                    <td v-for='item in series'>
                        {{item.data[index]}}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>

    export default{
        props: ['categories','series', 'title'],
        data(){
            return{
            }
        },
        computed: {
            headers: function(){
                let _headers = this.series.map((s) => {
                    return s.name
                })
                return _headers;
            }
        }

    }
</script>

<style lang='scss' scoped>
    .chart__container {
        .title__section {
            height:40px;
            line-height:40px;
            font-size:1.2em;
            padding-left:10px;
        }
        .table__container {
            display:block;
            width:100%;
            height:calc(100% - 40px);
            overflow-y:scroll;
            position:relative;
        }
        table {
            overflow-y:scroll;
            width:100%;
        }
        thead, tr {
            display:flex;
        }
        tbody {
            display:flex;
            flex-direction:column;
        }
        tr {
            height: 30px;
        }
        th {
            text-align: left;
            flex:1
        }

        td {
            flex:1;
            text-align: left;
        }
    }
</style>

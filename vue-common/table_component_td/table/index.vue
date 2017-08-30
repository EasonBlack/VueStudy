<template>
    <div class='table__container'>
    <table>
        <thead>
            <th v-for='col in columns'
            >{{col.title}}</th>
        </thead>
        <tbody>
            <template v-for='(row, index) in rows'>
                <tr>
                   <td v-for='col in columns'>
                       <col-image v-if='col.options.coltype=="image"' :image='row[col.id]' :desc='row["desc"]' :size='col.options.size'></col-image>
                       <col-enable-circle v-else-if='col.options.coltype=="enable-circle"' :value='row[col.id]' ></col-enable-circle>
                       <col-values-map-color v-else-if='col.options.coltype=="values-map-color"' :value='row[col.id]' :map='col.options.map'></col-values-map-color>
                       <span v-else>
                            {{row[col.id]}}
                       </span>
                   </td>
                </tr>
            </template>
        </tbody>
    </table>

    </div>

</template>

<script>
    import colEnableCircle from './col/enable_circle.vue';
    import colValuesMapColor from './col/values_map_color.vue';
    import colImage from './col/image_col.vue';
    export default{
        components: {colEnableCircle, colValuesMapColor, colImage},
        props: ['columns', 'rows', 'config', 'pager', 'noPager'],
        data(){
            return{
                isCheckAll: false
            }
        },
        methods: {
            checkAll() {
                console.log(this.isCheckAll)
                this.$emit('checkAll', this.isCheckAll);
            },
            checkRow(row, index) {
                this.$emit('checkRow', {index, bool: row.checked});
            },
            pageHandle(num) {
                this.$emit('pageHandle',num);
            }

        }
    }
</script>

<style lang='scss' scoped>

    .table__container {
        background-color:white;
    }
    table {
        width:100%;
        border-collapse:collapse;
        tr {
            height:40px;
        }
        thead {
            background-color: #ccc;
            th {
                border:none;
                border-top: 1px solid grey;
                border-bottom: 1px solid grey;
                height: 50px;
                font-size:13px;
                &.center {
                    text-align:center;
                }
                &.left {
                    text-align: left;
                    padding-left:20px;
                }
            }
        }
        tbody {
            background-color:white;
            font-size:13px;
            tr {
                border-bottom: 1px solid #E5E4E1;
            }
            .table__ck {
                width:30px;
                text-align: center;
            }
            td {
                color: black;
                &.center {
                    text-align:center;
                }
                &.left {
                    text-align: left;
                    padding-left:20px;
                }
            }
        }
    }

</style>

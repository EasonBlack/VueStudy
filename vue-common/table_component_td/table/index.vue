<template>
    <div class='table__container'>
    <table>
        <thead>
            <th v-for='col in columns'
               :class='[
                   col.options.textAlign
               ]'
            >{{col.title}}</th>
        </thead>
        <tbody>
            <template v-for='(row, index) in rows'>
                <tr>
                   <td v-for='col in columns'
                        :class='[
                            col.options.textAlign,
                            col.options.width
                         ]'
                   >
                       <col-image v-if='col.options.coltype=="image"' :image='row[col.id]' :desc='row["desc"]' :size='col.options.size'></col-image>
                       <col-enable-circle v-else-if='col.options.coltype=="enable-circle"' :value='row[col.id]' ></col-enable-circle>
                       <col-values-map-color v-else-if='col.options.coltype=="values-map-color"' :value='row[col.id]' :map='col.options.map'></col-values-map-color>
                       <col-desc v-else-if='col.options.coltype=="with-desc"' :value='row[col.id]' :desc='row[col.options.key]' />
                       <col-limit-popup v-else-if='col.options.coltype=="with-limit-popup"' :value='row[col.id]' />
                       <col-link-route v-else-if='col.options.coltype=="link-route"'
                            :value='row[col.id]'
                            :routeName='col.options.routeName'
                            :paramName= 'col.options.paramName'
                            :paramVal='row[col.options.keyName]' />
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
    import colLinkRoute from './col/col_link_route.vue'
    import colDesc from './col/col_desc.vue'
    import colLimitPopup from './col/col_limit_popup.vue'
    export default{
        components: {colEnableCircle, colValuesMapColor, colImage, colLinkRoute, colDesc, colLimitPopup},
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
    .center {
        text-align:center;
    }
    .left {
        text-align: left;
        padding-left:20px;
    }
    .right {
        text-align:right;
        padding-right:20px;
    }
    .w-200 {
        width:200px;
        max-width: 200px;
        padding:0 10px;
    }
</style>

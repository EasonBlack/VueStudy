<template>
    <div class='table__container'>
    <table>
        <thead>
            <th v-for='(col, $index) in columns'  :key='$index'
               :class='[
                   col.options.textAlign
               ]'
               v-if='col.show'
            >{{col.title}}</th>
            <span class='icon-cog' @click='columnsPopup'></span>
        </thead>
        <tbody>
            <template v-for='(row, index) in rows'>
                <tr :key='index'>
                   <td v-for='(col,$index) in columns'  :key='$index'
                        :class='[
                            col.options.textAlign,
                            col.options.width
                         ]'
                        v-if='col.show'
                   >
                       <col-image v-if='col.options.coltype=="image"' :image='row[col.id]' :desc='row["desc"]' :size='col.options.size'
                        @popup='imagePopup'
                       ></col-image>
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
            <tr v-if='totalRow' class='total__tr'>
                <td v-for='(col,$index) in columns'  :key='$index'
                    :class='[
                        col.options.textAlign,
                        col.options.width
                        ]'
                    v-if='col.show'
                >
                    {{totalRow[col.id]}}
                </td>
            </tr>
        </tbody>
    </table>
    <div class='popup__mask' v-if='showPopup' @click.prevent.stop='imagePopup'>
        <div class='image__popup'>
            <img :src='currentImage'  />
        </div>
    </div>
     <div class='columns__container' v-if='showColumns'>
        <ul>
            <li v-for='(col, $index) in columns' :key='$index'>
                <input type='checkbox' v-model='col.show' />
                <label>{{col.title}}</label>
            </li> 
        </ul>
    </div>
   
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
        props: ['columns', 'rows', 'config', 'pager', 'noPager', 'totalRow'],
        data(){
            return{
                isCheckAll: false,
                showPopup: false,
                currentImage: null,

                showColumns: false
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
            },
            imagePopup(obj) {
                if(obj) {
                    this.currentImage = obj.image;
                }
                this.showPopup = !this.showPopup;
            },
            columnsPopup() {
                this.showColumns = !this.showColumns;
            }

        }
    }
</script>

<style lang='scss' scoped>
    @import './components.cog.scss';
    @import './components.columns.scss';

    .table__container {
        background-color:white;
        position:relative;
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
            .total__tr {
                background-color: #ccc;
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
     .popup__mask {
        position:fixed;
        top:0;
        left:0;
        width:100vw;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items: center;
        z-index:999;
        background-color: rgba(black,0.3)
    }
</style>

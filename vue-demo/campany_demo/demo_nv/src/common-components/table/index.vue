<<template>
    <table class='table table-striped table-hover'>
        <thead>
            <th v-for='(col,index) in cols' :key='index' >
                {{col.title}}
            </th>
        </thead>
        <tbody>
            <tr v-for='(row, index) in rows' :key='index'>
                <td v-for='(col,index) in cols' :key='index' >
                    <col-key v-if='col.options.coltype=="col-key"'  :value='row[col.id]'  @colKeyClickHandle='colKeyClickHandle(row)'/>
                    <span v-else>{{row[col.id]}}</span>
                </td>
            </tr>
        </tbody>
    </table> 
</template>

<script>
    import colKey from './col/col-key.vue';
    export default {
        components: {colKey},
        props: ['rows', 'cols'],
        methods: {
            colKeyClickHandle(row) {
                this.$emit('colKeyClickHandle', row)
            }
        }
    }
</script>
<style lang='scss' scoped>
    table {
        width: 100%;
        th {
            background-color: #777;
            color:white;
            &:first-child {
                border-left:none;
            }
            &:last-child {
                border-right:none;
            }
        }
        td {
             &:first-child {
                border-left:none;
            }
            &:last-child {
                border-right:none;
            }
        }
        th,td {
            border: 1px solid #e7e7e7;
        }
    }
    .table-bordered {
        border: 1px solid #ebebeb;
    }
</style>

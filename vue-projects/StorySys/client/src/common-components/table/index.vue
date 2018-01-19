<<template>
    <div class='table__container'>
        <table>
            <thead>
                <th v-for='(col,index) in cols' :key='index' >
                    {{col.title}}
                </th>
                <th>  Inf  </th>
                <th>  Edt  </th>
                <th>  Del </th>
            </thead>
            <tbody>
                <tr v-for='(row, index) in rows' :key='index'>
                    <td v-for='(col,index) in cols' :key='index' >
                        {{row[col.id]}}
                    </td>
                    <td>
                        <div class='btn btn-detail' @click='detailRow(row)'>I</div>
                    </td>
                    <td>
                        <div class='btn btn-edit' @click='editRow(row)'>E</div>
                    </td>
                    <td>
                        <div class='btn btn-delete' @click='deleteRow(row)'>D</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['rows', 'cols'],
        methods: {
            detailRow(row) {
                this.$emit('detailRow', row);
            },
            editRow(row) {
                this.$emit('editRow', row);
            },
            deleteRow(row) {
                this.$emit('deleteRow', row);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .btn {
        width:30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:20px;
        color: white;
        border-radius: 50%;
        cursor:pointer;
    }
    .btn-detail {
        background-color: steelblue;
    }
    .btn-edit {
        background-color: palevioletred;
    }
    .btn-delete {
        background-color: seagreen
    }
</style>

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
                    {{row[col.id]}}
                </td>
            </tr>
        </tbody>
    </table> 
</template>

<script>
    export default {
        props: ['rows', 'cols'],
        methods: {
        }
    }
</script>
<style lang='scss' scoped>
    table {
        width: 100%;
    }
</style>

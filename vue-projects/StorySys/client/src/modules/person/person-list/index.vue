<<template>
    <div class='person-list__container'>
        <person-table  :rows='rows' :cols='cols'
             @editRow='editRow' @deleteRow='deleteRow' @detailRow='detailRow'
         />
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import personTable from '$component/table/index.vue';
    export default {
        components: {personTable},
        data() {
            return {
                
            }
        },
        methods: {
            editRow(row) {
                this.$store.commit('setDetail', row);
				this.$store.commit('togglePersonEdit', true);
            },
            detailRow(row) {
                this.$store.commit('setDetail', row);
                this.$store.commit('togglePersonDetail', true);
            },
			deleteRow(row) {
                this.$store.commit('deletePerson', row);
			}
        },
        computed: {
			...mapState({
				 rows: (state) => state.person.rows,
				 cols: (state) => state.person.cols
			})
		}
    }
</script>
<style lang='scss' scoped>
</style>

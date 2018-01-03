<<template>
    <div class='%%className%%-list__container'>
        <%%className%%-table  :rows='rows' :cols='cols'
             @editRow='editRow' @deleteRow='deleteRow' @detailRow='detailRow'
         />
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import %%className%%Table from '$component/table/index.vue';
    export default {
        components: {%%className%%Table},
        data() {
            return {
                
            }
        },
        methods: {
            editRow(row) {
                this.$store.commit('setDetail', row);
				this.$store.commit('toggle%%className.capitalize()%%Edit', true);
            },
            detailRow(row) {
                this.$store.commit('setDetail', row);
                this.$store.commit('toggle%%className.capitalize()%%Detail', true);
            },
			deleteRow(row) {
                this.$store.commit('delete%%className.capitalize()%%', row);
			}
        },
        computed: {
			...mapState({
				 rows: (state) => state.%%className%%.rows,
				 cols: (state) => state.%%className%%.cols
			})
		}
    }
</script>
<style lang='scss' scoped>
</style>

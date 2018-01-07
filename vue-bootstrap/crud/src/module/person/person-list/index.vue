<template>
   
		<div class='table-wrapper'>
			<div class="table-title">
                <div class="row bg-dark text-white">
                    <div class="col-sm-6 ">
						<h2>Manage <b>Persons</b></h2>
					</div>
					<div class="col-sm-6 d-flex justify-content-end align-items-center">
						<a class="btn btn-success mr-1" @click='add'><span>Add New Person</span></a>
						<a class="btn btn-danger"><span>Delete</span></a>						
					</div>
                </div>
            </div>
			<person-table  :rows='rows' :cols='cols'
             @editRow='editRow' @deleteRow='deleteRow' @detailRow='detailRow' />
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
            add() {
			  	this.$store.commit('setDetail', {});
				this.$store.commit('togglePersonEdit', true);	
			},
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
    .table-wrapper {
        background: #fff;
        margin: 30px 0;
        padding: 20px 15px;
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }
</style>

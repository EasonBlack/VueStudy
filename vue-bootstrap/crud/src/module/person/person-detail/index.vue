<<template>
    <div class='mask' @click='cancel'>
        <div class="modal-dialog" role="document" @click.prevent.stop=''>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Person</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class='form-group'>
                        <person-row :title='"Name"' :value='row.name' />
                    </div>
                    <div class='form-group'>
                        <person-row :title='"Email"' :value='row.email' />
                    </div>
                    <div class='form-group'>
                        <person-row :title='"Address"' :value='row.address' />
                    </div>
                    <div class='form-group'>
                        <person-row :title='"Phone"' :value='row.phone' />
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
    import {mapState} from 'vuex'
    import personRow from '$component/form-row/detail.vue';
    export default {
        components: {personRow},
        props: ['row'],
        methods: {  
            cancel() {
                this.$store.commit('togglePersonDetail', false);
            },
        },
        computed: {
            ...mapState({
                detail: (state) => state.person.detail
            })
        }
    }
</script>
<style lang='scss' scoped>
    .mask {
        width:100vw;
        height: 100vh;
        position: fixed;
        top:0;
        left: 0;
        background-color: rgba(black, 0.2);
        display: flex;
        justify-content: center;
        padding-top: 100px;
    }
    .person-detail__container {
        width:400px;
        height:auto;
        background-color: white;
        position:relative;
    }
</style>

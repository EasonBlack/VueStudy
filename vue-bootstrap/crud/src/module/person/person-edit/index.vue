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
                        <person-row :title='"Name"' v-model='newName'/>
                    </div>
                    <div class='form-group'>
                        <person-row :title='"Email"' v-model='newEmail' />
                    </div>
                    <div class='form-group'>
                        <person-row :title='"Address"' v-model='newAddress' />
                    </div>
                    <div class='form-group'>
                        <person-row :title='"Phone"' v-model='newPhone' />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary"  @click='confirm'>Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click='cancel'>Close</button>
                </div>
            </div>
        </div>  
    </div>
   
</template>

<script>
    import {mapState} from 'vuex'
    import personRow from '$component/form-row/edit.vue';
    export default {
        components: {personRow},
        props: ['row'],
        data() {
            return {
                newName: '',
                newEmail: '',
                newAddress: '',
                newPhone: '',
            }
        },
        created() {
            this.newName = this.row.name;
            this.newEmail = this.row.email;
            this.newAddress = this.row.address;
            this.newPhone = this.row.phone;
        },
        methods: {  
            confirm() {
                let req = {
                    name : this.newName, 
                    email: this.newEmail,
                    address: this.newAddress,
                    phone: this.newPhone
                }
                if(this.row.name) {
                    this.$store.commit('updatePerson', req);
                } else {
                    this.$store.commit('createPerson', req);
                }
            },
            cancel() {
                this.$store.commit('togglePersonEdit', false);
            },
        },
        computed: {
            ...mapState({
                cols: (state) => state.person.cols
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
</style>

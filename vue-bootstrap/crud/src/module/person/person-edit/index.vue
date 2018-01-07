<<template>
    <modal :title='"Edit Person"' @cancel='cancel'>
        <div  slot="body">
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
        <div slot="footer">
            <button type="button" class="btn btn-primary"  @click='confirm'>Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click='cancel'>Close</button>
        </div>
    </modal>   
</template>

<script>
    import {mapState} from 'vuex'
    import personRow from '$component/form-row/edit.vue';
    import modal from '$component/modal/index.vue';
    export default {
        components: {personRow, modal},
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

</style>

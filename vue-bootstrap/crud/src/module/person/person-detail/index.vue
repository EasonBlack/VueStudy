<<template>
    <modal :title='"Person"' @cancel='cancel'>
        <div  slot="body">
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
    </modal>
   
</template>

<script>
    import {mapState} from 'vuex'
    import personRow from '$component/form-row/detail.vue';
    import modal from '$component/modal/index.vue';
    export default {
        components: {personRow, modal},
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

</style>

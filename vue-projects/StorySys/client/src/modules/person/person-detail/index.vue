<<template>
    <div class='mask' @click='cancel'>
        <div class='person-detail__container' @click.prevent.stop=''>
            <person-row :title='"Name"' :value='row.name' />
            <person-row :title='"Age"' :value='row.age'/>
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
            confirm() {
               
            },
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
        align-items: center;
    }
    .person-detail__container {
        width:400px;
        height:auto;
        background-color: white;
        position:relative;
    }
</style>

<<template>
    <div class='mask' @click='cancel'>
        <div class='%%className%%-detail__container' @click.prevent.stop=''>
            [% for col in cols -%]
                <%%className%%-row :title='"%%col.capitalize()%%"' :value='row.%%col%%'/>
            [% endfor %]
            <!-- <person-row :title='"Name"' :value='row.name' />
            <person-row :title='"Age"' :value='row.age'/> -->
        </div>
    </div>
   
</template>

<script>
    import {mapState} from 'vuex'
    import %%className%%Row from '$component/form-row/detail.vue';
    export default {
        components: {%%className%%Row},
        props: ['row'],
        methods: {  
            cancel() {
                this.$store.commit('toggle%%className.capitalize()%%Detail', false);
            },
        },
        computed: {
            ...mapState({
                detail: (state) => state.%%className%%.detail
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
    .%%className%%-detail__container {
        width:400px;
        height:auto;
        background-color: white;
        position:relative;
    }
</style>

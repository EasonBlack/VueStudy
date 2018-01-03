<<template>
    <div class='mask' @click='cancel'>
        <div class='%%className%%-detail__container' @click.prevent.stop=''>
            [% for col in cols -%]
                <%%className%%-row :title='"%%col.capitalize()%%"' v-model='new%%col.capitalize()%%'/>
            [% endfor %]
            <!-- <%%className%%-row :title='"Name"' v-model='newName'/>
            <%%className%%-row :title='"Age"' v-model='newAge' /> -->
            <div>
                <button @click='confirm'>Confirm</button>
                <button @click='cancel'>Cancel</button>
            </div>
            
        </div>
    </div>
   
</template>

<script>
    import {mapState} from 'vuex'
    import %%className%%Row from '$component/form-row/edit.vue';
    export default {
        components: {%%className%%Row},
        props: ['row'],
        data() {
            return {
                [% for col in cols -%]
                    new%%col.capitalize()%%: '',
                [% endfor %]
            }
        },
        created() {
            [% for col in cols -%]
                this.new%%col.capitalize()%% = this.row.%%col%%;
            [% endfor %]
        },
        methods: {  
            confirm() {
                let req = {
                    [% for col in cols -%]
                       %%col%%: this.new%%col.capitalize()%%,
                    [% endfor %]
                }
                if(this.row.%%keycol%%) {
                    this.$store.commit('update%%className.capitalize()%%', req);
                } else {
                    this.$store.commit('create%%className.capitalize()%%', req);
               }
            },
            cancel() {
                this.$store.commit('toggle%%className.capitalize()%%Edit', false);
            },
        },
        computed: {
            ...mapState({
                cols: (state) => state.%%className%%.cols
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

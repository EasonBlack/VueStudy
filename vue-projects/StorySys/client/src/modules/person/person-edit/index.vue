<<template>
    <div class='mask' @click='cancel'>
        <div class='person-detail__container' @click.prevent.stop=''>
            <person-row :title='"Name"' v-model='newName'/>
            <person-row :title='"Age"' v-model='newAge' />
            <div>
                <button @click='confirm'>Confirm</button>
                <button @click='cancel'>Cancel</button>
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
                newAge: ''
            }
        },
        created() {
            this.newName = this.row.name;
            this.newAge = this.row.age;
        },
        methods: {  
            confirm() {
               if(this.row.name) {
                    this.$store.commit('updatePerson', {name: this.newName, age: this.newAge});
               } else {
                    this.$store.commit('createPerson', {name: this.newName, age: this.newAge});
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
        align-items: center;
    }
    .person-detail__container {
        width:400px;
        height:auto;
        background-color: white;
        position:relative;
    }
</style>

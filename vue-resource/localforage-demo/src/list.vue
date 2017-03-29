<template>
    <div>
    aaaa
        <ul>
            <li v-for='a in dataaa'>{{a.num}}</li>
        </ul>
        <ul>
            <li v-for='b in databb'>{{b.title}}</li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    export default{
        data(){
            return{

            }
        },
        created() {
            this.$store.dispatch('fetchAA');
            this.$store.dispatch('fetchBB');
        },
        computed: {
             ...mapState({
                dataaa: (state) => {
                     return state.test.aa;
                },
                databb: (state) => {
                     return state.test.bb;
                }
             })
        }

    }
</script>

<style lang='scss' scoped>

</style>

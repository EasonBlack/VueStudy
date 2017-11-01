<template>
    <div>
        <h2>This is Home</h2>
        <my-table :rows='rows' :cols='cols' class='table__wrapper'/>   
    </div>
</template>

<script>
    import myTable from '$components/table/index.vue'
    import {mapState} from 'vuex'
    import * as types from 'types';
    export default{
        components: {myTable},
        data() {
            return {    
            }
        },
        created() {
           this.$store.dispatch(types.FETCH_HOME)
        },
        computed: {
            ...mapState({
                rows: (state) => state.home.rows,
                cols: (state) => state.home.cols,
            })
        }
    }
</script>

<style lang='scss' scoped>
    @import './Home.scss'
</style>

<template>
    
    <div class='row'>
        <div class='w-100p title d-flex align-items-center text-white font-weight-bold pl-10'>Accounts:</div>
        <account-table :rows='rows' :cols='cols' @colKeyClickHandle='getAccountDetail'/>
    </div>
       
    
</template>
<script>
    import {mapState} from 'vuex';
    import accountTable from '$components/table/index.vue';
    export default {
        components: {accountTable},
        methods: {
            getAccountDetail(row) {
                alert(row.id)
            }
        },
        computed: {
            ...mapState({
                rows: (state)=> state.account.rows,
                cols: (state)=> state.account.cols
            })
        }
    }
</script>
<style lang='scss' scoped>
    .title {
        min-height:41px;
        background-color: #95989c;
        border-left: 10px solid #4DBADF;
    }
</style>
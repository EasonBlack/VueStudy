<template>
    <div class='table__container'>
        <div class='header__container'>

        </div>
        <div class='content__container'>
            <feedback-table :columns='columns' :rows='feedbacks' @rowHandle='rowHandle' ></feedback-table>
        </div>
        <feedback-detail v-if='detail.length>0 && showDetail' :detail = 'detail' @closeHandle='closeHandle' ></feedback-detail>
    </div>

</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import feedbackTable from './table/index.vue';
    import feedbackDetail from '../feedback-detail/index.vue';
    export default {
        components: {feedbackTable, feedbackDetail},
        created: function() {
            this.fetchFeedBack()
        },
        watch: {
            '$route': 'fetchFeedBack'
        },
        data:function() {
            return {
                showDetail: false,
                columns: [
                    {id:'id', name: 'ID'},
                    {id:'name', name: 'Name'},
                    {id:'time', name: 'TIME'},
                    {id:'date', name: 'DATE'}
                ]
            }
        },
        methods: {
            fetchFeedBack: function() {
                this.$store.dispatch('fetchFeedbacks');
            },
            rowHandle: function(obj) {
               this.$store.dispatch('fetchFeedBackDetailById', obj.val);
               this.showDetail = true;
            },
            closeHandle: function() {
               this.showDetail = false;
            }

        },
        computed:{
           ...mapState({
               feedbacks: (state) => {
                   return state.feedback.all;
               },
               detail: (state)=> {
                   return state.feedback.detail;
               }
           })
        }
    }
</script>
<style lang='scss' scoped>
    .table__container {
        position:relative;
    }
    .header__container {

    }
</style>
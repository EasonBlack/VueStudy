<template>
    <div class='table__container'>
        <div class='header__container'>

        </div>
        <div class='content__container'>
            <feedback-table :columns='columns' :rows='pagerRows' @rowHandle='rowHandle' ></feedback-table>
        </div>
        <feedback-pager :count="pagernum" v-if='feedbacks.length' @pagerHandle='pagerHandle'></feedback-pager>
        <feedback-detail v-if='detail.length>0 && showDetail' :detail = 'detail' @closeHandle='closeHandle' ></feedback-detail>
    </div>

</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import feedbackTable from './table/index.vue';
    import feedbackDetail from '../feedback-detail/index.vue';
    import feedbackPager from './pager/index.vue';
    export default {
        components: {feedbackTable, feedbackDetail, feedbackPager},
        created: function() {
            this.fetchFeedBack()
        },
        watch: {
            '$route': 'fetchFeedBack'
        },
        data:function() {
            return {
                perPage: 10,
                currentPage : 1,
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
            },
            pagerHandle: function(obj) {
                this.currentPage = obj.val;
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
           }),
           pagerRows: function() {
                let _rows = this.feedbacks.slice( (this.currentPage-1) * this.perPage,  (this.currentPage-1) * this.perPage + 10 );
                return _rows;
           },
           pagernum: function() {
                return Math.ceil(this.feedbacks.length / 10);
           },
        }
    }
</script>
<style lang='scss' scoped>
    .table__container {
        position:relative;
        height:100vh;
    }
    .header__container {

    }
    .content__container {
        height:500px;
        overflow:hidden;
    }
</style>
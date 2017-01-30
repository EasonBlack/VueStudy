<template>
    <div class='table__container'>
        <div class='header__container'>

        </div>
        <div class='content__container'>
            <feedback-table :columns='columns' :rows='feedbacks' ></feedback-table>
        </div>

    </div>

</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import feedbackTable from './table/index.vue';

    export default {
        components: {feedbackTable},
        created:function() {
            this.fetchFeedBack()
        },
        watch: {
            '$route': 'fetchFeedBack'
        },
        data:function() {
            return {
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
            }
        },
        computed:{
           ...mapState({
               feedbacks: (state) => {
                   return state.feedback.all;
               }
           })
        }
    }
</script>
<style lang='scss' scoped>
    .header__container {

    }
</style>
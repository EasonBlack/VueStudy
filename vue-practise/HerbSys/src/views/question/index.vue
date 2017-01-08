<template>
    <div class='question__container'>
        <table-div :columns='columns'  :rows='questions'></table-div>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import tableDiv from '../../common/table/index.vue';
    export default {
        components:{tableDiv},
        beforeCreate:function() {
             if(!this.$store.state.question.length) {
               this.$store.dispatch('fetchQuestions');
            }
        },
        data: function() {
            return {
                 columns: [
                     {id:'id', name: 'ID'},
                     {id:'title', name: 'Title'},
                     {id:'type', name: 'Type'},
                     {id:'answer', name: 'Answer'},
                 ]
            }
        },
        methods: {
        },
        computed:{
            ...mapState({
                questions: (state) => {
                    return state.question.all;
                }
            })
        },
    }
</script>
<style lang='scss' scoped>
    .question__container {

    }
</style>
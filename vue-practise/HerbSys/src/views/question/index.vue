<template>
    <div class='question__container'>
        <add-panel :active='editActive'
                    v-on:confirmHandle='confirmHandle'
                    v-on:closeHandle='closeHandle'></add-panel>
        <table-div :columns='columns'  :rows='questions'
                    :title="'Question Manage'"
                    v-on:toggleAddPanel= 'toggleAddPanel'
        ></table-div>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import tableDiv from '../../common/table/index.vue';
    import addPanel from './add-panel.vue';
    export default {
        components:{tableDiv, addPanel},
        beforeCreate:function() {
             if(!this.$store.state.question.length) {
               this.$store.dispatch('fetchQuestions');
            }
        },
        data: function() {
            return {
                 editActive: false,
                 columns: [
                     {id:'id', name: 'ID'},
                     {id:'title', name: 'Title'},
                     {id:'type', name: 'Type'},
                     {id:'answer_title', name: 'Answer'},
                 ]
            }
        },
        methods: {
            ...mapActions({
                postQuestion: 'postQuestion'
            }),
            toggleAddPanel: function() {
                this.editActive = true;
            },
            closeHandle: function() {
                this.editActive = false;
            },
            confirmHandle: function(req){
                this.postQuestion(req);
                this.editActive = false;
            }
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
        position:relative;
        overflow:hidden;
        min-height:100vh;
    }
</style>
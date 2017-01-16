<template>
    <div class='question__container'>
        <add-panel :active='editActive'
                    :questionType='question_types'
                    :questionCurrent = 'question_current'
                    v-on:confirmHandle='confirmHandle'
                    v-on:closeHandle='closeHandle'></add-panel>
        <table-div :columns='columns'  :rows='questions'
                    :title="'Question Manage'"
                    v-on:toggleAddPanel= 'toggleAddPanel'
                    v-on:editHandle= 'editHandle'
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
             if(!this.$store.state.question.all.length) {
               this.$store.dispatch('fetchQuestions');
            }
        },
        data: function() {
            return {
                 editActive: false,
                 question_current: {
                    id: '',
                    title: '',
                    type: '',
                    display: ''
                 },
                 columns: [
                     {id:'id', name: 'ID'},
                     {id:'title', name: 'Title', width:'30%'},
                     {id:'type', name: 'Type'},
                     {id:'display', name: 'Display'}
                 ]
            }
        },
        methods: {
            ...mapActions({
                postQuestion: 'postQuestion',
                updateQuestion: 'updateQuestion'
            }),
            toggleAddPanel: function() {
                this.editActive = true;
            },
            editHandle: function(item) {
                console.log(item);
                this.editActive = true;
                this.question_current = item
            },
            closeHandle: function() {
                this.editActive = false;
            },
            confirmHandle: function(req){
                if(req.id) {
                    this.updateQuestion(req);
                } else {
                    this.postQuestion(req);
                }
                this.question_current = {};
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
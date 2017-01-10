<template>
    <div class='feedback-new__container'>
        <div class='header__container'>
            New Feedback
        </div>
        <div class='content__container'>
             <div class='basic__container'>
                 <div class='feedback__row'>
                     <label>Name</label>
                     <input type=text v-model='newName' />
                 </div>
                 <div class='feedback__row'>
                     <label>Date</label>
                     <input type=text v-model='newDate' />
                 </div>
             </div>
             <div class='detail__container'>
                  <div class='feedback__row' v-for='question in questions'>
                     <label class='question__title'>{{question.title}}</label>
                     <textarea v-if='question.type==1' />
                     <template v-else-if='question.type==2'>
                         <div v-for='an in question.answer_title'>
                             <input type=checkbox />
                             <label>{{an}}</label>
                         </div>
                     </template>

                  </div>
             </div
        </div>

    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    export default {
        beforeCreate:function() {
             if(!this.$store.state.question.all.length) {
               this.$store.dispatch('fetchQuestions');
            }
        },
        data:function() {
            return {}
        },
        computed:{
            ...mapState({
                questions: (state) => {
                    return state.question.all;
                }
            })
        }
    }
</script>
<style lang='scss' scoped>
    .feedback-new__container {
        overflow:hidden;
    }

    .header__container {
        height:60px;
        display: flex;
        align-items: center;
        padding: 0 60px;
        font-size: 1.2em
    }
    .content__container {
        overflow:auto;
        height:calc(100vh - 60px);
    }
    .basic__container, .detail__container {
        padding:0px 60px;

        .feedback__row {
            width:100%;
            display:flex;
            height:50px;
            margin-bottom:30px;
            label {
                display:inline-block;
                width:100px;
                height:40px;
                line-height:40px;
            }
            input[type=text] {
                width: 200px;
                height: 40px;
                line-height: 40px;
                padding:0 10px;
            }

        }
    }
    .detail__container {
        .feedback__row {
            height:auto;
            display:flex;
            flex-direction:column;
        }
        .question__title {
            display:block;
        }
        label {
            display:inline-block;
            width:100px;
            height:40px;
            line-height:40px;
         }
        textarea {
           width:300px;
           height:80px;
        }
    }

</style>
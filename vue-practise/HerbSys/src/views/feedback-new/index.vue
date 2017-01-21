<template>
    <div class='feedback-new__container'>
        <div class='header__container'>
            <a class='btn btn__confirm' v-on:click='confirm'>Confirm</a>
        </div>

        <ul class='tab__container'>
            <li
             v-bind:class="{
                active: currentTab=='basic'
             }"
             v-on:click='currentTab="basic"'>Basic</li>
            <li
             v-bind:class="{
                active: currentTab=='detail'
             }"
             v-on:click='currentTab="detail"'>Detail</li>
        </ul>
        <div  class='content__container' v-if='questions.length'>
             <basic-question v-show='currentTab == "basic"' :feedback='feedback' ></basic-question>
             <detail-question v-show='currentTab == "detail"' :questions='questions' :answers='answers' ></detail-question>
        </div>




    </div>
</template>
<script>
    import Vue from 'vue';
    import basicQuestion from './basic.vue';
    import detailQuestion from './detail.vue';
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    export default {
        components: {basicQuestion, detailQuestion},
        beforeCreate:function() {
             if(!this.$store.state.question.all.length) {
               this.$store.dispatch('fetchQuestions');
            }
        },
        data:function() {
            return {
                currentTab: 'basic',
                feedback: {
                    name: '',
                    time:'',
                    date:'',
                    next:''
                },
                answers: {}
            }
        },

        methods: {
            confirm: function() {
                console.log(this.feedback, this.answers);
                let obj = {
                    feedback : this.feedback,
                    answers: this.answers
                }
                Vue.http.post('http://localhost:3000/api/herb/feedback', obj).then((response) => {
                    console.log(response);
                })
            }
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
        align-items: left;
        padding: 10px 10px;
        font-size: 1.2em;
        .btn {
            display:inline-block;
            padding: 0px 20px;
            font-size: 1.1em;
            height:40px;
            line-height:40px;
            border-radius: 5px;
            color:white;
            margin-right:10px;
        }
        .btn__confirm {
            background-color: rgba(steelblue,0.7);
            &:hover {
                background-color: rgba(steelblue,1);
            }

        }
    }
    .tab__container {
        padding:0px 10px;
        ul {
           list-style:none;
        }
        li {
            display:inline-block;
            width:150px;
            height:40px;
            line-height:40px;
            text-align:center;
            font-size:1.1em;
            background-color: rgba(steelblue, 0.5);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            color:white;
            &:hover {
                background-color: rgba(steelblue, 0.9);
            }
            &.active {
                background-color: rgba(70, 183, 162, 0.9);
            }
        }
    }
    .content__container {
        overflow:hidden;
        height:calc(100vh - 120px);
        padding:0px 10px;

    }

</style>
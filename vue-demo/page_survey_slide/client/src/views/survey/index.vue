<template>
    <div class='survey__container'>
        <div class='header__container'></div>
        <div class='content__container'>
            <a class='nav__button left__button' >
                 <img src='../../assets/left.png' @click.prevent.stop='prevHandle'  v-if='current > 1'  />
            </a>
            <div class='question__mask'>

                <ul class='question__container'
                   :style="{
                        width: questions.length * 100 +'%',
                        left: (current-1) * -100 + '%'
                    }"
                >
                    <li v-for='question in questions'
                       >
                       <question-div :question='question' v-if='question.type=="radio"'
                        @checkHandle='checkHandle'></question-div>
                        <question-check :question='question' v-if='question.type=="check"'
                        @multiCheckHandle='multiCheckHandle'></question-check>
                    </li>
                </ul>
            </div>
            <a class='nav__button right__button' >
                 <img src='../../assets/right.png' @click.prevent.stop='nextHandle'  v-if='current < questions.length'  />
            </a>
        </div>


        <nav-bar :count="questions.length"  :current='current'
            @submitHandle='submitHandle'
            @openQuitMessage='openQuitMessage'
           ></nav-bar>
        <quit-message v-if='showQuit' @closeQuitMessage='closeQuitMessage'></quit-message>
    </div>
</template>

<script>
    import navBar from './nav.vue';
    import questionDiv from './question.vue';
    import questionCheck from './question_check.vue';
    import quitMessage from './quit_message.vue';
    export default{
        components: {navBar,questionDiv, questionCheck,  quitMessage},
        data(){
            return{
                current: 1,
                showQuit: false,
                questions: [
                    {
                        id: 'q1', title:'aaaaaaaa',
                        type: 'radio',
                        items: [
                            {id: 1, title:'aaaa'},
                            {id: 2, title:'bbbb'},
                            {id: 3, title:'cccc'}
                        ]
                     },
                    {
                        id: 'q2', title:'BBBBBBBBB',
                        type: 'radio',
                        items: [
                            {id: 1, title:'aaaa'},
                            {id: 2, title:'bbbb'},
                            {id: 3, title:'cccc'}
                        ]
                     },
                    {
                        id: 'q3', title:'cccccccccc',
                        type: 'check',
                        items: [
                            {id: 1, title:'aaaa'},
                            {id: 2, title:'bbbb'},
                            {id: 3, title:'cccc'}
                        ]
                     },
                    {
                        id: 'q4', title:'dddddddd',
                        type: 'check',
                        items: [
                            {id: 1, title:'1111'},
                            {id: 2, title:'2222'},
                            {id: 3, title:'3333'},
                            {id: 4, title:'5555'}
                        ]
                     }
                ],
                answers: {
                    q1: '',
                    q2: '',
                    q3: '',
                    q4: ''
                }
            }
        },
        created: function() {

        },
        methods: {
            prevHandle: function() {
                this.current = this.current - 1;
            },
            nextHandle:function() {
                this.current = this.current + 1;
            },
            checkHandle: function(obj) {
                this.answers[obj.name]=obj.val;
            },
            multiCheckHandle:function(obj) {
                 this.answers[obj.name]=obj.val;
            },
            submitHandle: function(){
                console.log(this.answers);
                this.$router.push('/over');
            },
            openQuitMessage: function() {
                this.showQuit = true;
            },
            closeQuitMessage: function() {
               this.showQuit = false;
            }
        }
    }
</script>


<style scoped lang='scss'>
    .header__container {
        width:100%;
        height:40px;
        background-color:steelblue;
    }
    .survey__container {
        height:100%;
    }
    .nav__button {
          display:block;
          width:100px;
          text-align: center;
          img {
              width:1.5em;
          }
     }
     .content__container {
        width:100vw;
        height:300px;
        display:flex;
     }
    .question__mask {
        flex:1;
        overflow:hidden;
        position:relative;
        ul {
            display:flex;
            flex:1;
            position:absolute;
        }
        li {
            width:100%;
        }
    }

</style>

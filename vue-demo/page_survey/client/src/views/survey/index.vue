<template>
    <div class='survey__container'>
        <div class='header__container'></div>
        <question-div :question='questions[current-1]'
            :current='current' :count='questions.length'
             @prevHandle='prevHandle' @nextHandle='nextHandle'
            @checkHandle='checkHandle'>
        </question-div>
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
    import quitMessage from './quit_message.vue';
    export default{
        components: {navBar,questionDiv, quitMessage},
        data(){
            return{
                current: 1,
                showQuit: false,
                questions: [
                    {
                        id: 'q1', title:'aaaaaaaa',
                        items: [
                            {id: 1, title:'aaaa'},
                            {id: 2, title:'bbbb'},
                            {id: 3, title:'cccc'}
                        ]
                     },
                    {
                        id: 'q2', title:'BBBBBBBBB',
                        items: [
                            {id: 1, title:'aaaa'},
                            {id: 2, title:'bbbb'},
                            {id: 3, title:'cccc'}
                        ]
                     },
                    {
                        id: 'q3', title:'cccccccccc',
                        items: [
                            {id: 1, title:'aaaa'},
                            {id: 2, title:'bbbb'},
                            {id: 3, title:'cccc'}
                        ]
                     }
                ],
                answers: {
                    q1: '',
                    q2: '',
                    q3: ''
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
</style>

<template>
    <div class='detail__container'>
         <div class='row' v-for='q in questions'>
            <div class='left'>
                <label>{{q.title}}</label>
            </div>
            <div class='right'>
                <textarea v-if='q.type=="t"' />
                <template v-else-if='q.type=="a"'>
                    <input type='text' v-model='currents[q.id]' />
                    <a v-on:click='addCurrentToAnswer(q.id)'>Add</a>
                    <ul>
                        <li v-for="a in answers[q.id]">
                            {{a}}
                        </li>
                    </ul>
                </template>
            </div>
         </div>
    </div>
</template>
<script>
    export default {
        props: ['questions'],
        data: function() {
            return {
                answers: {
                },
                currents: {
                }
            }
        },
        created: function() {
            for(let q in this.questions) {
                this.$set(this.answers, this.questions[q].id, [])
                this.$set(this.currents, this.questions[q].id, [])
            }
        },
        methods: {
            addCurrentToAnswer:function(id) {
                if(!this.answers[id]) {
                    this.answers[id] = [];
                }
                console.log(this.currents[id]);
                this.answers[id].push(this.currents[id]);
                console.log(this.answers[id]);
            },
            getAnswers: function(id) {
                return this.answers[id];
            }
        }
    }
</script>
<style lang='scss' scoped>
    .detail__container {
         width:100%;
         height:100%;
         border: 1px solid rgba(grey, 0.3);
         position:relative;
         display:flex;
         flex-direction: column;
         overflow:auto;
         .row {
             display:flex;
             width:100%;
             margin-bottom:20px;
             &:first-child {
                 margin-top:50px;
             }
            .right {
                flex:2;
                display:flex;
                justify-content:flex-start;
            }
            .left {
                flex:1;
                display:flex;
                justify-content:flex-end;
            }
            label {
                width:100px;
            }
            input {
                 width:300px;
                 height:40px;
                 line-heihgt:40px;
                 outline:medium;
                 padding:5px 10px
            }
            textarea {
                width: 70%;
                height:100px;
            }
         }
    }
</style>
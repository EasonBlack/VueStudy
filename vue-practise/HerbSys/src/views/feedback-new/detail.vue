<template>
    <div class='detail__container'>
         <div class='row' v-for='q in questions'>
            <div class='up'>
                <div class='flex__1 '>
                     <label>{{q.title}}</label>
                </div>
            </div>
            <div class='down'>
                <textarea v-if='q.type=="t"'  v-model='answers[q.id][0]' />
                <template v-else-if='q.type=="a"'>
                    <input type='text' v-model='currents[q.id]' />
                    <span class='icon-plus list__add' v-on:click='addCurrentToAnswer(q.id)'></span>
                    <span class='icon-down-open' @click='toggleDefaultAnswer(q.id)'  v-if='q.default_answer && q.default_answer.length' />
                    <ul class='form__array default_answer__container' v-if='showDefault[q.id]'>
                        <li v-for="(a, index) in q.default_answer" @click='setToAnswer(q.id, a)'>
                           {{a}}
                        </li>
                    </ul>
                    <ul class='form__array'>
                        <li v-for="(a, index) in answers[q.id]">
                            <span class='icon-minus list__minus'  v-on:click='removeAnswer(q.id, index)'></span>{{a}}
                        </li>
                    </ul>
                </template>
            </div>
         </div>
    </div>
</template>
<script>
    export default {
        props: ['questions', 'answers'],
        data: function() {
            return {
                currents: {
                },
                showDefault : {
                }
            }
        },
        created: function() {
            for(let q in this.questions) {
                this.$set(this.answers, this.questions[q].id, []);
                this.$set(this.currents, this.questions[q].id, '');
                this.$set(this.showDefault, this.questions[q].id, false);
            }
        },
        methods: {
            addCurrentToAnswer:function(id) {
                this.answers[id].push(this.currents[id]);
                this.currents[id] = '';
            },
            getAnswers: function(id) {
                return this.answers[id];
            },
            removeAnswer: function(id, index) {
                this.answers[id].splice(index, 1);
            },
            toggleDefaultAnswer: function(id) {
                this.showDefault[id] = !this.showDefault[id];
            },
            setToAnswer: function(id, a) {
                this.currents[id] = a;
                this.showDefault[id] = false;
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
         overflow:auto;
         .row {
             display:flex;
             flex-direction:column;
             width:100%;
             margin-bottom:20px;
             &:first-child {
                 margin-top:50px;
             }
            .up {
                flex:1;
                position:relative;
                height: 30px;

            }
            .down {
                flex:1;
                position:relative;
                margin-left:16%;
            }
            label {
                margin-left:16%;
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
                padding:5px 10px;
                resize: none;
            }

            .list__add {
                width: 30px;
                height: 30px;
                background-color: steelblue;
                border-radius: 50%;
                color: white;
                padding-left: 7px;
                padding-top: 6px;
                display: inline-block;
            }
            .list__minus {
                position:absolute;
                left:-25px;
                width: 20px;
                height: 20px;
                background-color: coral;
                border-radius: 50%;
                color: white;
                padding-left: 2px;
                display: inline-block;
            }
            .form__array {
                li {
                    position:relative;
                    display: block;
                    padding:0 10px;
                    height:20px;
                    line-height:20px;
                    margin-bottom:5px;
                    &:first-child {
                        margin-top:5px;
                    }
                }
            }
         }
    }
    .icon-down-open {
         width: 30px;
         height: 30px;
         margin-left: 10px;
         color: white;
         background-color: steelblue;
         border-radius: 50%;
         display:inline-block;
         padding-left: 7px;
         padding-top: 6px;
         &:before {
             margin-right:0px;
         }
     }
    .default_answer__container {
        position: absolute;
        background-color: white;
        z-index: 100;
        width: 300px;
        border: 1px solid grey;
        border-top: none;
        li {
           height:20px;
           line-height:20px;
        }
        li:hover {
            background-color: rgba(grey, 0.5);
        }
    }
</style>
<template>
    <div class='detail__container'>
         <div class='row' v-for='q in questions'>
            <div class='up'>
                <div class='flex__1 '>
                     <label>{{q.title}}</label>
                </div>
            </div>
            <div class='down'>
                <textarea v-if='q.type=="t"' />
                <template v-else-if='q.type=="a"'>
                    <input type='text' v-model='currents[q.id]' />
                    <span class='icon-plus list__add' v-on:click='addCurrentToAnswer(q.id)'></span>
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
                this.$set(this.currents, this.questions[q].id, '')
            }
        },
        methods: {
            addCurrentToAnswer:function(id) {
                if(!this.answers[id]) {
                    this.answers[id] = [];
                }

                this.answers[id].push(this.currents[id]);
                this.currents[id] = '';
            },
            getAnswers: function(id) {
                return this.answers[id];
            },
            removeAnswer: function(id, index) {
                this.answers[id].splice(index, 1);
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
</style>
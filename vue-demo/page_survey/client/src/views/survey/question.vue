<template>
    <div class='question__container'>
        <div class='question__title'>{{question.title}}</div>

        <div class='question__content'>
            <a class='nav__button left__button'  >
                 <img src='../../assets/left.png' @click='prev'  v-if='current > 1'/>
            </a>
            <ul>
                <li v-for='(item,index) in question.items' @click='checkAnswer(item,index)'>
                    <img src='../../assets/student-icon.png' />
                    <div>
                        {{item.title}}
                    </div>
                    <div class='checkmark' v-if='checkIndex == index'></div>

                </li>
            </ul>
            <a class='nav__button right__button' >
                <img src='../../assets/right.png' @click.prevent.stop='next'  v-if='current < count'  />
            </a>
        </div>
    </div>
</template>

<script>

    export default{
        props: ['question','current', 'count'],
        data(){
            return{
                checkIndex: -1
            }
        },
        watch: {
            'question': function() {
                this.checkIndex = -1;
            }
        },
        methods: {
            checkAnswer:function(item, i) {
                this.checkIndex = i;
                this.$emit('checkHandle', {name: this.question.id , val:item.id});
            },
            prev:function() {
                this.$emit('prevHandle')
            },
            next: function() {
                this.$emit('nextHandle');
            }
        }
    }
</script>

<style lang='scss' scoped >
    .question__container {
        width:100%;
        display:flex;
        flex-direction:column;
    }
    .question__title {
        width:100%;
        height:60px;
        text-align:center;
    }
    .nav__button {
        display:block;
        width:100px;
        text-align: center;
        img {
            width:1.5em;
        }
    }
    .question__content {
        width:100%;
        display:flex;
        ul {
            display:flex;
            flex:1;
            flex-direction:row;
            li {

                flex:1;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items: center;
                position:relative;
                img {
                    width:70px;
                    height:70px;
                    display:block;
                    margin-bottom:10px;
                }
                .checkmark {
                    position:absolute;
                    top:0;
                    left:calc( 50% - 20px );
                    width: 40px;
                    height: 40px;
                    background-repeat:no-repeat;
                    background: url(../../assets/checkmark.png);
                }
            }
        }
    }
</style>

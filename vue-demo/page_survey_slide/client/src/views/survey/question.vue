<template>
    <div class='question__container'>
        <div class='question__title'>{{question.title}}</div>

        <div class='question__content'>
            <ul>
                <li v-for='(item,index) in question.items' @click='checkAnswer(item,index)'>
                    <img src='../../assets/student-icon.png' />
                    <div>
                        {{item.title}}
                    </div>
                    <div class='checkmark' v-if='checkIndex == index'></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default{
        props: ['question'],
        data(){
            return{
                checkIndex: -1
            }
        },
        methods: {
            checkAnswer:function(item, i) {
                this.checkIndex = i;
                this.$emit('checkHandle', {name: this.question.id , val:item.id});
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

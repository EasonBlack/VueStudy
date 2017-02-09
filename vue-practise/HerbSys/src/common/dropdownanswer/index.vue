<template>
    <div class='dropdown__container'>
        <div class='input__container'>
            <span class='icon-down-open'  @click='showSourceToggle'/>
        </div>
        <ul v-if='dropdownAnswer.length && showSource'>
            <li v-for='item in dropdownAnswer'  @click='emitHandle(item.answer)'>{{item.answer}}</li>
        </ul>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    export default {
        props: ['id'],
        data: function() {
            return {
                showSource: false
            }
        },
        methods: {
            showSourceToggle: function() {
                this.showSource = !this.showSource;
            },
            emitHandle: function(item) {
                console.log(item);
                this.$emit('emitAnswerHandle', {val: item});
            }
        },
        watch: {
            'id': function(val) {
                 this.$store.dispatch('fetchQuestionAnswer', val);
            }
        },
        computed: {
            ...mapState({
                 dropdownAnswer: (state) => {
                     return state.question.dropdownAnswer;
                 }
            })
        }
    }
</script>
<style lang='scss' scoped>
    .dropdown__container {
        width:100%;
        position:relative;
        ul {
            position:absolute;
            top: 30px;
            right:90%;
            background-color:white;
            display:block;
            list-style:none;
            height: 100px;
            overflow: auto;
            z-index:100;
            width:150px;
            li {
                color:black;
            }
        }
    }
    .input__container {
        display:flex;
        input {
            padding-left:10px;
        }
        span {
            width: 25px;
            height: 25px;
            margin-left: 10px;
            color: white;
            background-color: steelblue;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            &:before {
                margin-right:0px;
            }
        }
    }
</style>
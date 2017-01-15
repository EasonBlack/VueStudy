<template>
    <div class='feedback-new__container'>
        <div class='header__container'>

        </div>
        <div class='content__container'>
            <ul>
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
            <basic-question v-show='currentTab == "basic"'></basic-question>
            <detail-question v-show='currentTab == "detail"'></detail-question>

        </div>

    </div>
</template>
<script>
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
                currentTab: 'basic'
            }
        },
        methods: {

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

</style>
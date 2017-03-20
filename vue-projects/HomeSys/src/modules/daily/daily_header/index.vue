<template>
    <div  class='daily-header__container'>
        <div class='daily-btn daily-btn__next'>
           <a class='icon-angle-double-left' @click='prevWeek'></a>
        </div>
        <div class='daily-btn daily-btn__prev'>
           <a class=' icon-left-open' @click='prev'></a>
        </div>
        <div class='daily-header__title'>{{title}}</div>
        <div class='daily-btn daily-btn__next'>
            <a class=' icon-right-open'  @click='next' ></a>
        </div>
        <div class='daily-btn daily-btn__next'>
            <a class='icon-angle-double-right' @click='nextWeek'></a>
        </div>
    </div>
</template>
<script>
    export default {
        props:['title'],
        data() {
            return {}
        },
        methods: {
            prevWeek: function() {
                this.$emit('updateCurrent', -7);
            },
            prev: function() {
                this.$emit('updateCurrent', -1);
            },
            next: function() {
                this.$emit('updateCurrent', 1);
            },
            nextWeek: function() {
                this.$emit('updateCurrent', 7);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .daily-header__container {
        width:300px;
        height:100%;
        display:flex;
        align-items:center;
    }
    .daily-header__title {
        flex:1;
        text-align:center;
    }
    .daily-btn {
         width: 30px;
         height: 30px;
         line-height: 30px;
         text-align: center;
         color: white;
         background-color: steelblue;
         border-radius: 50%;
    }
    .daily-btn__prev {
        padding-left: -1px
    }
    .daily-btn__next {
        padding-left: 3px;
    }

</style>
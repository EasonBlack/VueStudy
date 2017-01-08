<template>
    <div class='weekend__container'>
        <div class='day__container' v-for='day in days'>
             {{day}}
        </div>
    </div>

</template>
<script>
    export default {
        data:function() {
            return {
                days: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thuresday',
                    'Friday',
                    'Saturday'
                ]
            }
        }
    }
</script>

<style lang='scss' scoped>
    .weekend__container {
        width:100%;
        height:20px;
        line-height:20px;
        background-color: steelblue;
        color:white;
        display:flex;
    }
    .day__container {
        flex:1;

    }
</style>
<template>
    <div class='day__container'>
        {{day}}
    </div>
</template>

<script>
    import moment from 'moment';
    export default{
        props:['daynum'],
        data(){
            return{
                msg:'hello vue'
            }
        },
        computed: {
            day: function() {
                return moment().day(this.daynum-1).format('ddd')
            }
        }

    }
</script>

<style lang='scss' scoped>
    .day__container {
        flex: 1 0 14%;
        display:flex;
        height: 30px;
        font-size:0.7em;
        display:flex;
        justify-content: center;
        align-items: center;
        color:white;
    }
</style>

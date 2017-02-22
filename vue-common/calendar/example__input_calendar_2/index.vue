<template>
    <div class='m__container'>
        <calendar  v-on:confirmHandle='confirmHandle'></calendar>
    </div>
</template>

<script>
    import calendar from './calendar.vue';
    export default{
        components: {calendar},
        data(){
            return{
                selectDate: ''
            }
        },
        methods: {

            confirmHandle: function(obj) {
                this.selectDate = obj.date;
            }
        }
    }
</script>

<style scoped lang='scss'>
    .m__container {
        width:210px;;
        position:relative;
        .input__wrapper {
            width:100%;
            position:relative;
            display:inline-block;
            height:30px;
            &:after {
                content: '';
                position: absolute;
                right: 5px;
                top: 2px;
                background-image: url(../../../assets/icons/Calendar-50.png);
                background-repeat: no-repeat;
                background-size: contain;
                width: 25px;
                height: 25px;
            }
        }
        input {
            width:100%;
            height:30px;
            line-height:30px;
            padding:5px 25px 5px 15px;
            outline:medium;
            display:inline-block;
            position:relative;

        }
    }
</style>

<template>
    <div class='m__container'>
        <span class='input__wrapper'>
            <input type='text' v-on:click='toggleCalendar' :value='value'  @input="$emit('input', $event.target.value)" />
        </span>
        <date-calendar v-if='showCalendar' v-on:confirmHandle='confirmHandle'></date-calendar>
    </div>
</template>

<script>
    import dateCalendar from './calendar.vue';
    export default{
        props: ['value'],
        components: {dateCalendar},
        data(){
            return{
                showCalendar: false,
                selectDate: ''
            }
        },
        methods: {
            toggleCalendar:function() {
                this.showCalendar = !this.showCalendar;
            },
            confirmHandle: function(obj) {
                this.$emit('input', obj.date)
                this.showCalendar = false;
            }
        }
    }
</script>

<style scoped lang='scss'>
    .m__container {
        width:100%;
        height:100%;
        position:relative;
        .input__wrapper {
            width:100%;
            position:relative;
            display:inline-block;
            height:100%;
            &:after {
                content: '';
                position: absolute;
                right: 5px;
                top: calc( 50% - 12px);
                background-image: url(../../../../../assets/icons/Calendar-50.png);
                background-repeat: no-repeat;
                background-size: contain;
                width: 25px;
                height: 25px;
            }
        }
        input {
            width:100%;
            height:100%;
            line-height:100%;
            padding:5px 25px 5px 15px;
            outline:medium;
            display:inline-block;
            position:relative;

        }
    }
</style>

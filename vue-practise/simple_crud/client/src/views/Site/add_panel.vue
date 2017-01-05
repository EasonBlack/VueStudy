<template>
    <div>
        <div class='form__section'>
            <div class='form__row'>
                <label class='form__left'>Name:</label>
                <input class='form__right' type=text name='name' v-model='newName'/>
            </div>
        </div>

        <div class='bottom__section'>
            <div class='btn__wrapper'>
                <a class='btn__confirm'  v-on:click='confirmHandle'>Confirm</a>
            </div>
            <div class='btn__wrapper'>
                <a class='close__confirm' v-on:click='closeHandle'>Close</a>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        props: ['active'],
        data(){
            return{
                newName: ''
            }
        },
        methods: {
            confirmHandle: function() {
                this.$emit('confirmHandle', {name: this.newName});
            },
            closeHandle:function() {
                this.$emit('closeHandle', {flag: false});
            }
        }
    }

</script>

<style lang='scss' scoped>

    .btn__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

    .btn__confirm {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        background-color: steelblue;
        color: white;
        text-align: center;
    }

    .close__confirm {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        background-color: coral;
        color: white;
        text-align: center;
    }
</style>

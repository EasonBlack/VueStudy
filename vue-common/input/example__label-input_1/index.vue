<template>
    <div class='row__container'>
        <div class='left' >
            <label>{{title}} :</label>
        </div>
        <div class='right'>
            <input type='text' :value="value" @input="$emit('input', $event.target.value)"  />
        </div>
    </div>
</template>

<script>

    export default{
        props: ['title', 'value'],
        data(){
            return{

            }
        }

    }
</script>

<style lang='scss' scoped>
    .row__container {
        width:100%;
        height: 100%;
        display:flex;
        position:relative;
        .left {
            padding:0 20px;
            flex:0 0 33%;
            display:flex;
            align-items:center;
            justify-content: flex-end;
            box-sizing: border-box;
        }
        .right {
            flex:2;
            input[type=text] {
                outline:medium;
                width:100%;
                height:100%;
                padding:0px 20px;
            }
        }
    }
</style>

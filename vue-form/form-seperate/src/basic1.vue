<template>
    <div>
        <div>
            <label>Name:</label>
            <input type=text v-model='basic1.name'>
        </div>
        <div>
            <label>Num:</label>
            <input type=text v-model='basic1.num'>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['basic1'],
        data(){
            return{
            }
        }

    }
</script>

<style lang='scss' scoped>
    label {
        display:inline-block;
        width:150px;
    }
</style>

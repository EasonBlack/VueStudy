<template>
    <div>
        <div>
            <label>B2:</label>
            <input type=radio v-model='basic2.b2' value='hhh' name='b2'>
            <input type=radio v-model='basic2.b2' value='bbb' name='b2'>
        </div>
        <div>
            <label>B2-1:</label>
            <input type=checkbox id='c1' value='bbb' v-model='basic2.b3'/>
            <input type=checkbox id='c2' value='ccc' v-model='basic2.b3' />
            <input type=checkbox id='c3' value='fff' v-model='basic2.b3' />
        </div>
   </div>
</template>

<script>
    export default{
        props:['basic2'],
        data(){
            return{

            }
        }
    }
</script>

<style lang='scss' scoped>

</style>

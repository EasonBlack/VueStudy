<template>
    <div class='container'>
        <table>

        </table>
    </div>
</template>

<script>
    export default{
        props: ['columns', 'rows'],
        data(){
            return{

            }
        }

    }
</script>

<style lang='scss' scoped>
    .container {
        display:block;
        width:100%;
        height:100%;
        overflow:hidden;

        table {
            width:100%;
        }
    }

</style>

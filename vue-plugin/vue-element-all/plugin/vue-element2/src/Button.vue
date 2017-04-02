<template>
    <div class='el__button2'>
        <a>{{title}}</a>
    </div>
</template>
<script>
     export default {
        name: 'MyButton2',
        props: ['title']
      };
</script>
<style lang='scss'>
    .el__button2 {
        a {

            height:40px;
            line-height:40px;
            text-align:center;
            color: steelblue;
            border: 1px solid steelblue;
            background-color:#ccc;
            border-radius: 5px;
            padding: 0px 10px;
            display:inline-block;
        }
    }
</style>
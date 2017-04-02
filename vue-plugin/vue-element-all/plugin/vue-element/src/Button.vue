<template>
    <div class='el__button'>
        <a>{{title}}</a>
    </div>
</template>
<script>
     export default {
        name: 'MyButton',
        props: ['title']
      };
</script>
<style lang='scss'>
    .el__button {
        a {

            height:30px;
            line-height:30px;
            text-align:center;
            color: steelblue;
            border: 1px solid steelblue;
            background-color:white;
            border-radius: 5px;
            padding: 0px 10px;
            display:inline-block;

        }
    }
</style>
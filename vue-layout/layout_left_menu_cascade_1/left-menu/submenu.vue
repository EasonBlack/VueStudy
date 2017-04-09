<template>
    <div class='submenu__container'>
        <ul>
            <li v-for='item in items '>
                {{item.title}}
            </li>
        </ul>
    </div>
</template>

<script>

    export default{
        props: ['items'],
        data(){
            return{

            }
        }

    }
</script>

<style lang='scss' scoped>
    .submenu__container {
        height:100%;
        background-color: #D65656;
        max-width:200px;
        ul {
            li {
               height:40px;
               line-height:40px;
               text-align:left;
               padding:0 10px;
               overflow: hidden;
            }
        }
    }
</style>

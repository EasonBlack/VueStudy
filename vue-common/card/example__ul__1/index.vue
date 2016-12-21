<template>
    <ul class='container'>
        <li>
            {{title}}
        </li>
        <row :title="'AAAA'" :content="item.lvl1"></row>
        <row :title="'BBBB'" :content="item.lvl2"></row>
        <row :title="'CCCC'" :content="item.lvl3"></row>
    </ul>
</template>

<script>
    import row from './row.vue';
    export default{
        components: {row},
        props:['item', 'title'],
        data(){
            return{

            }
        }

    }
</script>

<style lang='scss' scoped>
    .container {
        display:block;
        list-style:none;
        background-color: darken(#fff, 2);
        border-radius:1em;
        width:300px;
        li {
            display:flex;
            justify-content: flex-start;
            align-items:center;
            height:3em;
            border-bottom:1px solid rgba(#333, 0.1);
            font-size:0.7em;
            padding-left:1em;
        }
        li:first-child {
            font-size:1.2em;
            height:2em;
        }
        li:last-child {
            border-bottom:none;
        }
    }
</style>

<template>
     <ul>
         <li v-for='item in group'>
             {{item.name}}
         </li>
     </ul>
</template>
<script>
    export default {
        props: ['group'],
        data() {
            return {}
        }
    }
</script>
<style lang='scss' scoped>
    ul {
        display:block;
        border: 2px solid lightgreen;
        border-radius:2px;
        margin-bottom:10px;
        li {
            padding:10px;
        }
    }
</style>
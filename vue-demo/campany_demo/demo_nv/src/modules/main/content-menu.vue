<template>
    <ul class='container'>
        <li v-for='(menu, $index) in menus' :key='$index' @click='goto(menu)'>{{menu.title}}</li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                menus: [
                    {title: 'Home', href: '/home'},
                    {title: 'Revenue', href: '/revenue'},
                    {title: 'Bill', href: '/bill'},
                    {title: 'Rate', href: '/rate'},            
                ]
            }     
        },
        methods: {
            goto(menu) {
                this.$router.push(menu.href);
            }
        }
    }
</script>
<style lang='scss' scoped>
</style>
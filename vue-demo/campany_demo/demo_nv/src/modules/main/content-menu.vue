<template>
    <div class='container'>
        <ul class='d-flex align-items-center'>
            <li v-for='(menu, $index) in menus' :key='$index' @click='goto(menu)'>
                <a :class='{active: menu.selected}'>{{menu.title}}</a>
            </li>
        </ul>
    </div>
   
</template>
<script>
    export default {
        data() {
            return {
                menus: [
                    {title: 'Home', href: '/home', selected: true},
                    {title: 'Revenue', href: '/revenue', selected: false},
                    {title: 'Bill', href: '/bill', selected: false},
                    {title: 'Rate', href: '/rate', selected: false},            
                ]
            }     
        },
        methods: {
            goto(menu) {
                this.menus.map(m=> { m.selected=false });
                menu.selected = true;
                this.$router.push(menu.href);
            }
        }
    }
</script>
<style lang='scss' scoped>
    ul {
        list-style: none;
        padding:0;
        li {
            
        }
        a {
            display: block;
            padding: 7px 15px;
            &:hover {
                background-color: #2c3e50;
                border-bottom: 2px solid #fbeb29;
            }
        }
        .active {
            background-color: #2c3e50;
            border-bottom: 2px solid #fbeb29;
        }
    }
</style>
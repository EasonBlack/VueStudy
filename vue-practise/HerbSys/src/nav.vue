<template>
    <ul class='nav__container'>
        <li v-for='(item,index) in items' v-on:click='goto(item, index)'
            v-bind:class="{
                active: index==currentIndex
            }">
            <span v-bind:class="'icon-' + item.icon"></span>
            {{item.name}}
        </li>
    </ul>
</template>
<script>
    export default {
        data: function() {
            return {
                currentIndex : 1,
                items: [
                    {name: "New" , href: 'new', icon: 'plus'},
                    {name: "Calendar", href: 'calendar', icon: 'calendar'},
                    {name: "Table", href: 'table', icon: 'table'},
                    {name: "Question", href: 'question', icon: 'quora'},
                ]
            }
        },
        methods: {
            goto: function(item, index) {
               this.currentIndex = index;
               this.$router.push(`/${item.href}`);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .nav__container {

        li {
            font-size:1.1em;
            height:50px;
            line-height:50px;
            padding:0px 10px;
            position:relative;
            &.active {
                background-color: #00A2BF;
            }

        }
         li.active:after {
             content: ' ';
             position: absolute;
             right: 0px;
             top: 15px;
             width: 0;
             height: 0;
             border-top: 10px solid transparent;
             border-right: 10px solid white;
             border-bottom: 10px solid transparent;
         }
    }
</style>
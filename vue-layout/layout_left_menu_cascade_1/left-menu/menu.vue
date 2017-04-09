<template>
    <div class='menu__container'>
        <ul>
            <li v-for='item in items '>
                <div class='menu__item'  @click='menuClick(item)'>{{item.title}}</div>
                <transition name='subexpand'>
                    <div  class='submenu__container' v-if='item.items && expandMenu == item.name'>
                        <ul>
                            <li v-for='t in item.items'>
                                {{t.title}}
                            </li>
                        </ul>
                    </div>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>

    export default{
        props: ['items'],
        data(){
            return{
                expandMenu: null
            }
        },
        methods: {
            menuClick(item) {
                if(this.expandMenu == item.name) {
                    this.expandMenu = null;
                } else {
                    this.expandMenu = item.name;
                }
                this.$emit('expandMenu', item.name)

            }
        }

    }
</script>

<style lang='scss' scoped>
     .menu__container {
        ul {
            li {
                display:block;
                position:relative;
            }
        }
     }
     .menu__item {
         line-height:50px;
         min-height:50px;
         text-align: center;
         width:100px;
         color: steelblue;
     }

     .submenu__container {
        display:block;
        position:relative;
        overflow:hidden;
        max-height:200px;
        ul {
            li {
                 line-height:50px;
                 min-height:50px;
                 text-align: left;
                 padding: 0 5px;
                 background-color: #AAF5AA;
            }
        }

     }

      .subexpand-enter-active {
          max-height:200px;
          transition: max-height 1s ease;
      }
      .subexpand-enter  {
          max-height: 0px;
      }
      .subexpand-leave {
          max-height:200px;
      }
      .subexpand-leave-active {
          max-height: 0px;
          transition: max-height 1s ease;
      }
</style>

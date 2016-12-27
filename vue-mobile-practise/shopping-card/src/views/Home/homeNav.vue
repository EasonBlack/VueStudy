<template>
    <div class="nav__container">
        <ul >
            <li class="nav__hack"></li>
            <li v-for="(item,index) in items"
                v-bind:class="{
                    active: activeNum == index
                 }"
                v-on:click="activeItem(item, index)">
                {{item.title}}
            </li>
        </ul>
        <div class="input__container">
            <input class="nav__input" type="text" :placeholder="currentItem.placeholder" />
        </div>
    </div>
</template>

<script>

    export default{
        props: ['items'],
        data(){
            return{
                activeNum: 0,
                currentItem: this.items[0]
            }
        },
        methods : {
            activeItem :function(item,index) {
                this.activeNum = index
                this.currentItem = item;
                this.$emit('getCurrentNav', {val: item.id});
            }
        }
    }
</script>

<style lang='scss' scoped>
    .nav__container {
        margin-top:200px;
        display:block;
        position:relative;
        width:100vw;

        ul {
            display:flex;
            flex-direction:row;
            overflow-x:scroll;
            height:50px;

        }

        li {
            flex: 0 0 100px;
            height:40px;
            display:flex;
            background-color:rgba(grey, 0.6);
            justify-content: center;
            align-items: center;
            color:white;
            position:relative;

        }
        li.nav__hack {
            flex: 0 0 0px;
        }
        li.active:after {
            content: ' ';
            position: absolute;
            left: 40px;
            bottom:-10px;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid black;
        }


    }

    .input__container {
        width:100vw;
        padding:0px 10px;
    }

    .nav__input {
        width:100%;
        height:40px;
        padding:5px 10px;
        outline: white;
    }
</style>

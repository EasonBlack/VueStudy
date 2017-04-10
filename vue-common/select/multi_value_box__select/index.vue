<template>
    <div class='select__container'>
        <div class='input__wrapper'>
            <span class='selected_tag' v-for='r in selectdItems'>
                 <span class='del' @click='delItem(r)'>x</span>
                 {{r.title}}
            </span>
            <input type=text @click='handleSelect' readonly  />
        </div>
        <ul class='items__wrapper' :class='{
            active: showItems
        }'>
            <li v-for='item in unselectedItems' :value='item.name' @click='selectItem(item)'>{{item.title}}</li>
        </ul>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                showItems: false,
                items: [
                    {name: 'aaa', title: 'AAA'},
                    {name: 'bbb', title: 'BBB'},
                    {name: 'ccc', title: 'CCC'},
                    {name: 'ddd', title: 'DDD'},
                    {name: 'eee', title: 'EEE'},
                    {name: 'fff', title: 'FFF'},
                    {name: 'ggg', title: 'GGG'}
                ]
            }
        },
        methods: {
            handleSelect() {
                this.showItems = !this.showItems;
            },
            selectItem(item) {
                this.$set(item, 'selected', true);
            },
            delItem(item) {
                this.$set(item, 'selected', false);
            }

        },
        computed: {
            unselectedItems() {
                return this.items.filter(o=>!o.selected)
            },
            selectdItems() {
                 return this.items.filter(o=>o.selected)
            }
        }

    }
</script>

<style lang='scss' scoped>
    .select__container {
        width:100%;
    }

    .input__wrapper {
        background-color:white;
        border: 1px solid #ccc;
        border-radius: 2px;
        width:350px;
        padding:10px;
        display:flex;
        .selected_tag {
            display:inline-block;
            height:20px;
            line-height:20px;
            text-align:center;
            padding:0 10px;
            background-color: lightblue;
            margin-right:5px;
            .del {
                color: #ccc;
                &:hover {
                    color: grey;
                }
            }
        }

        input {
            min-width:50px;
            display:inline-block;
            flex:1;
            border:none;
        }
    }

    .items__wrapper {
        position:absolute;
        top:40px;
        left:10px;
        display:block;
        list-style:none;
        background-color:white;

        border-top:none;
        padding:0 10px;
        width:350px;
        max-height:0px;
        overflow:auto;
        transition: max-height 0.3s ease;
        &.active {
            border:1px solid #ccc;
            padding:10px;
            max-height:200px;
        }
        li {
            height:30px;
            line-height:30px;
        }
    }


</style>

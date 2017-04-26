<template>
    <div class='select__container' >
        <div class='input__wrapper' @click='handleSelect'>
            <span class='blank_tag' v-if='!selectdItems.length'></span>
            <span class='selected_tag' v-for='r in selectdItems'>
                 <span class='del' @click.prevent.stop='delItem(r)'>x</span>
                 <span>{{r.title}}</span>
            </span>

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
        props:['value'],
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
                let o = this.items.filter(o=>!o.selected);
                if(!o.length) return;
                this.showItems = !this.showItems;
            },
            selectItem(item) {
                this.$set(item, 'selected', true);
                this.showItems = !this.showItems;
                this.$emit('input', this.items.filter(o=>o.selected))
            },
            delItem(item) {
                this.$set(item, 'selected', false);
                this.$emit('input', this.items.filter(o=>o.selected))
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
        width:300px;
        padding: 0 10px;
        line-height: 35px;

        .blank_tag {
            display:inline-block;
            height:20px;
            line-height:20px;
            text-align:center;
            padding:0 10px;

            margin-right:5px;
        }
        .selected_tag {
            display:inline-block;
            height:20px;
            line-height:20px;
            text-align:center;
            padding:0 10px;
            background-color: lightblue;
            margin-right:5px;
            span {
                display:inline-block;
            }
            .del {
                color: #ccc;
                &:hover {
                    color: grey;
                }
            }
        }

        input {
            width:10px;
            display:inline-block;
            flex: 1;
            border:none;
        }
    }

    .items__wrapper {
        display:block;
        list-style:none;
        background-color:white;
        border-top:none !important;
        padding:0 10px;
        width:300px;
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

<template>
    <div class='tree__container'>
        <div class='tree__left'>
            <div class='tree__search'></div>
            <div class='tree__items'>
                <tree-component :items='items'></tree-component>
            </div>
        </div>
        <div class='tree__right'>
            <div class='tree__result_info'></div>
            <div class='tree__result_items'>
                 <div v-for='item in selectItems'>
                    {{item.title}}
                 </div>
            </div>
        </div>
    </div>
</template>
<script>
    import treeComponent from './tree.vue';
    export default {
        components: {treeComponent},
        data() {
            return {
                items: [
                    {"id": 1, "title": "AAAA", "items": [
                        {"id": 11, "title": "aaa1"},
                        {"id": 12, "title": "aaa2"},
                        {"id": 13, "title": "aaa3"}
                    ]},
                    {"id": 2, "title": "BBBBB", "items": [
                        {"id": 21, "title": "bbbb1"},
                        {"id": 22, "title": "bbbb2"},
                        {"id": 23, "title": "bbbb3"}
                    ]},
                ]
            }
        },

        computed: {
            selectItems() {
                let group = [];
                this.items.forEach((i)=>{
                    if(i.items) {
                        group.push(...i.items);
                    }
                })
                return group.filter((a)=> a.checked);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .tree__container {
         width:100%;
         height:100%;
         display:flex;
    }
    .tree__left {
        flex:1;
        .tree__search {
            background-color:steelblue;
            height:50px;
            display:flex;
        }
    }
    .tree__right {
        flex:1;
        .tree__result_info {
            background-color:steelblue;
            height:50px;
            display:flex;
        }
    }
</style>
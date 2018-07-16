<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon" @click='menuDown'></span>
        </button>

        <div class="collapse navbar-collapse" :class='{show: isMenuDown}'>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for='item in items' :key='item.name'
                    :class='{dropdown: item.items, active: item.name==currentName}'
                >
                    <template v-if='!item.items'>
                        <a class="nav-link" href="javascript:void(0)" @click='goto(item)'>{{item.title}}</a>
                    </template>
                    <template v-else>
                        <a class="nav-link dropdown-toggle" href="javascript:void(0)" @click='dropdown(item)' >
                            {{item.title}}
                        </a>
                        <div class="dropdown-menu" :class='{down: item.isdown}' >
                            <a class="dropdown-item" href="javascript:void(0)" 
                            v-for='child in item.items' :key='child.name'  @click='goto(child)'
                                :class='{active: child.name==currentName}'
                            >
                                {{child.title}}
                            </a>
                        </div>
                    </template>
                </li>   
            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        data() {
            return {
                isMenuDown: false,
                currentName: 'current',
                items : [
                    {name: 'current', title: 'Current', path:'/current'},
                    {name: 'inspire', title: 'Inspire', isdown: false ,items: [
                        {name: 'inspire-new', title: 'New', path : '/inspire/new'},
                        {name: 'inspire-list', title: 'List', path : '/inspire/list'},
                    ]},
                    {name: 'collection', title: 'Collection', isdown: false ,items: [     
                        {name: 'collection-it-list', title: 'IT', path : '/collectionit/list'},
                        {name: 'collection-lit-list', title: 'Lit', path : '/collectionlit/list'},
                    ]},
                    {name: 'book', title: 'Book', path:'/book'},
                ]
            }
        },
        methods:{
            dropdown(item) {
                item.isdown = !item.isdown;
            },
            menuDown() {
                this.isMenuDown = !this.isMenuDown;
            },
            goto(item) {
                //item.isdown = false;
                this.items.forEach(t=> {t.isdown=false});
                this.currentName = item.name;
                this.$router.push(item.path);
            }
        }

    };
</script>
<style lang='scss' scoped>
    .down {
        display:block !important;
    }
</style>
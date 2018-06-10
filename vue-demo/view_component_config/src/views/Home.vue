<template>
    <div  class='view-wrapper'>  
        <div>
            <button class='btn btn-primary' @click='add'>Add</button>
            <button class='btn btn-primary' @click='minus'>Minus</button>
        </div>
        <div v-for='item in items' :key='item.name' :class='"col-" + item.w'>
            <component :is="item.name"   :p1="p1"  :p2="p2"/>
       </div>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data() {
            return {
                items: [
                    {name: "chart1", w: 6},
                    {name: "chart3", w: 6},
                    {name: "chart4", w: 6},
                ],
                p1 : 0,
                p2:  99
            }
        },
        methods: {
            add() {
                this.p1 = this.p1 + 1;
            },
            minus() {
                  this.p1 = this.p1 - 1;
            },
        }
    }
</script>

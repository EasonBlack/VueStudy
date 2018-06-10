<template>
    <div class='view-wrapper'>
       <div v-for='item in items' :key='item.name' :class='"col-" + item.w'>
            <component :is="item.name"  :p1="'2'"  :p2="'3'"/>
       </div>
    </div>
</template>

<script>

    export default{
        data() {
            return {
                items: [
                    {name: "chart1", w: 6},
                    {name: "chart2", w: 3},
                    {name: "chart4", w: 3},
                    {name: "chart3", w: 12},
                ]
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>
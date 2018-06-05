<template>
    <div  class='view-wrapper'>  
        <div v-for='item in items' :key='item.name' :class='"col-" + item.w'>
            <component :is="item.name" />
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
                ]
            }
        }
    }
</script>

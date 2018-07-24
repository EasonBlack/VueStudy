<template> 
    <div class='parent'>
        <select @chang='changeItem(item)'>
            <option v-for='item in items' :key='item.id'>
                {{item.name}}
            </option>
        </select>
        <multi-select :items='item.children'  v-if='item.active && item.children.length' />
    </div>
</template>

<script>
    export default  {
        name: 'multi-select',
        components: { menuSelect: this },
        props: ['items'],
        data() {
            return {

            }
        },
        methods: {
            changeItem(item) {
               
            }
        }
    }
   
</script>
<style lang='scss' scoped>
</style>

<template> 
    <div class='parent'>
        <select @change='selectChange' v-model='currentItem'>
            <option v-for='item in items' :key='item.id' :value='item'>
                {{item.name}}
            </option>
        </select>
        <multi-select :items='currentItem.children'   v-if='currentItem.children && currentItem.children.length' @selectChange='selectChange' />
    </div>
</template>

<script>
    export default  {
        name: 'multi-select',
        components: { menuSelect: this },
        props: ['items'],
        data() {
            return {
                currentItem:{
                },
            }
        },
        watch: {
           items(nv) {
               this.currentItem = {}
           }
        },
        created() {
            console.log(this.$parent.currentItem);
        },
        methods: {
            selectChange(e) {
               
                if(e.target) {
                    this.$emit('selectChange', this.currentItem);
                } else {
                    this.$emit('selectChange', e);
                }
                
            }
        }
    }
   
</script>
<style lang='scss' scoped>
</style>

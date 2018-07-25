<template> 
    <div class='parent d-flex'>
        <select class='mr-10' @change='selectChange' v-model='currentItem'>
            <option v-for='item in items' :key='item.ID' :value='item'>
                {{item.NAME}}
            </option>
        </select>
        <multi-select :items='currentItem.children' v-if='currentItem.children && currentItem.children.length' @selectChange='selectChange' />
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
    select {
        height:40px;
    }
    option {
        padding-left:10px;
        padding-right:10px;
    }
</style>

<template>
    <div class='main__container'
    >
        <cell v-for='i in 10' :key='i' :index='i'
            @dropDown='dropDown'>
           <box v-if='i==position' :w ='w' :h='h' ref='box1'></box>
        </cell>
    </div>
</template>

<script>
    import cell from './cell.vue';
    import box from './box.vue';
    export default{
        components: {cell, box},
        data(){
            return{
                w: 2,
                h: 1,
                position:2
            }
        },
        methods: {
           dropDown(o) {
                let target = o.target;
                this.position=target;
                this.$refs.box1[0].$emit('removeHide');
           }
        }

    }
</script>

<style lang='scss' scoped>
    .main__container {
        overflow-x:hidden;
        overflow-y:scroll;
        position:relative;
        display:flex;
        flex-wrap:wrap;
    }
</style>

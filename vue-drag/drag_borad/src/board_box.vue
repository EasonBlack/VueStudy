<template>
     <div class='placeholder' ></div>
</template>
<script>
    import bus from '../bus.js'
    export default {
        props: ['index'],
        data() {
            return {
                top: 6 + Math.floor((this.index-1)/3)*10 + Math.floor((this.index-1)/3)*100,
                left: 6 + ((this.index-1)%3)*10  + ((this.index-1)%3)*100
            }
        },
        methods: {

        },
        mounted: function() {
             this.$el.addEventListener('mouseup', ()=>{
                 bus.$emit('boxMouseUpHandle', {top: this.top, left: this.left})
             } )

        }
    }
</script>
<style lang='scss' scoped>
      .placeholder {
            display:flex;
            flex:1 0 110px;
            position:relative;
            &:after {
                content: '';
                position:absolute;
                top: 5px;
                left:5px;
                width:100px;
                height:100px;
                border: 1px solid grey;
            }
      }
</style>
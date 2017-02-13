<template>
     <div class='placeholder' ></div>
</template>
<script>
    import bus from '../bus.js'
    export default {
        props: ['index'],
        data() {
            return {
                top: Math.floor(this.index/3)*5 + (this.index-1)*100,
                left: (this.index/3)? (this.index/3)*5:3*5  + (this.index-1)*100
            }
        },
        methods: {

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
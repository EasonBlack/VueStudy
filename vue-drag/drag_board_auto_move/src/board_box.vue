<template>
     <div class='placeholder' @mouseover='mouseOverHandle' @mouseup='mouseUpHandle'  ></div>
</template>
<script>
    import bus from '../bus.js'
    export default {
        props: ['index', 'b', 'current'],
        data() {
            return {
                position: {
                    y: Math.floor((this.index-1)/3),
                    x: (this.index-1)%3
                },
                top: 6 + Math.floor((this.index-1)/3)*10 + Math.floor((this.index-1)/3)*100,
                left: 6 + ((this.index-1)%3)*10  + ((this.index-1)%3)*100,

            }
        },
        methods: {
             mouseOverHandle: function() {

                if(this.b.hasOccupied(this.position.x, this.position.y, this.current)) {
                    let _c = this.b.moveOccupied(this.position.x, this.position.y);
                    console.log(_c.id)
                    bus.$emit('cardRedraw', {c: _c});
                }
             },
             mouseUpHandle: function() {
                 bus.$emit('boxMouseUpHandle', {top: this.top, left: this.left, position: this.position})
             }
        },
        mounted: function() {


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
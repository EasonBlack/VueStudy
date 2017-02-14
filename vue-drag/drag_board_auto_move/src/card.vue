<template>
    <div class='dragable'
    @mousedown='mouseDownHandle($event)'
    :cid='c.id'
    :style='{
        top: pos.top,
        left: pos.left,
        backgroundColor: color
    }'
    >
    </div>
</template>
<script>
     import theBoard from '../model/board.js'
     export default {
            props:['c',  'redrawId'],
            data() {
                return {
                    dragObject : null,
                    pos:  theBoard.getPosition(this.c.x, this.c.y),
                    color: this.c.color

                }
            },
            watch:{
                'redrawId': function(val){
                    if(val==this.c.id) {
                        console.log(this.c.id, ' is redrawed');
                        this.pos = theBoard.getPosition(this.c.x, this.c.y);
                        this.$forceUpdate();
                        this.$emit('clearRedraw',{});
                    }
                }
            },
            methods: {
                mouseDownHandle: function(event) {
                    theBoard.layout[this.c.y][this.c.x] = 0;
                    this.c.y = -1;
                    this.c.x = -1 ;
                    console.log(theBoard.layout);
                    this.$emit('mouseDownHandle', {e:event, el: this.$el, c: this.c})
                },
            }
        }
</script>
<style lang='scss' scoped>
   .dragable {
          width:100px;
          height:100px;
          position:absolute;
    }
</style>
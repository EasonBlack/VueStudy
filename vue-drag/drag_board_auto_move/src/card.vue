<template>
    <div class='dragable'
    @mousedown='mouseDownHandle($event)'
    :cid='c.id'
    :style='{
        top: pos.top,
        left: pos.left,
        backgroundColor: color,
        pointerEvents: movable ? "auto": "none"
    }'
    >
    </div>
</template>
<script>
     export default {
            props:['c', 'board', 'current', 'redrawId'],
            data() {
                return {
                    dragObject : null,
                    pos: this.board.getPosition(this.c.x, this.c.y),
                    color: this.c.color

                }
            },
            watch:{
                'redrawId': function(val){
                    if(val==this.c.id) {
                        this.pos = this.board.getPosition(this.c.x, this.c.y);
                        this.$forceUpdate();
                    }
                }
            },
            methods: {
                mouseDownHandle: function(event) {
                    this.$emit('mouseDownHandle', {e:event, el: this.$el, c: this.c})
                },


            },
            mounted: function() {
            },
            computed:  {
                movable: function() {
                    if(!this.current) {
                        return true
                    } else {
                       return false
                    }

                }
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
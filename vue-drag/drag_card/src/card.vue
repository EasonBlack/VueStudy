<template>
    <div class='dragable'
    @mousedown='mouseDownHandle($event)'

    :style='{
        top: top,
        left: left,
        backgroundColor: color
    }'
    >
    </div>
</template>
<script>
     export default {
            props:['defaultTop', 'defaultLeft', 'color'],
            data() {
                return {
                    dragObject : null,
                    top: this.defaultTop,
                    left: this.defaultLeft
                }
            },
            methods: {
                mouseDownHandle: function(event) {
                    this.$emit('mouseDownHandle', {e:event, el: this.$el})
                },


            },
            mounted: function() {
            }
        }
</script>
<style lang='scss' scoped>
   .dragable {
          width:100px;
          height:100px;
          border-radius:10px;
          position:absolute;
    }
</style>
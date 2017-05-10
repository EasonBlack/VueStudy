<template>
     <div class='target'
         :style="{
             width: w + 'px',
             height:h + 'px',
             top: t+ 'px',
             left: l+ 'px'
         }">
         <div class='resize_button'
            @mousedown.prevent='mousedownHandle($event)'
         ></div>
         <div class='move_button'
            @mousedown.prevent='moveHandle($event)'
         ></div>
     </div>
</template>
<script>
    export default {
        props: ['ismove', 'w','h','t','l'],
        methods: {
            mousedownHandle(e) {
                if(this.ismove) return false;
 		        this.$emit('mousedownHandle', {
 		            startx: e.pageX,
 		            starty: e.pageY
 		        })
 		    },
 		    moveHandle(e) {
                 this.$emit('boxMoveDownHandle', {
                     startx: e.pageX,
                     starty: e.pageY
                 })
 		    }
        }
    }
</script>
<style lang='scss' scoped>
     .target {
        background-color:steelblue;
        position:absolute;
    }
    .resize_button {
        width:10px;
        height:10px;
        position:absolute;
        bottom:-5px;
        right:-5px;
        background-color: lightgreen;
        border-radius: 50%;
        cursor: pointer;
    }
    .move_button {
        width:10px;
        height:10px;
        position:absolute;
        top:-5px;
        left:-5px;
        background-color: red;
        border-radius: 50%;
        cursor: pointer;
    }
</style>
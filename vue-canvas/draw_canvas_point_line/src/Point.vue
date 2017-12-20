
<template>
    <div class='point__wrapper' :style='{
            top: top - 15 + "px",
            left: left - 15 + "px"
        }'
        @mousedown="onMouseDown" @mouseup='onMouseUp'
    >
    </div>
</template>

<script>
    export default {
        props: ['top', 'left'],
        methods: {

            onMouseUp: function(e) {
                this.$store.commit('pointClickDownStop', {
                    x:  this.left , 
                    y:  this.top ,  
                });   
                this.$emit('drawLines');    
            },

            onMouseDown: function(e) {
                console.log('point mouse down');
                this.$store.commit('pointClickDownStart', {
                    x:  this.left , 
                    y:  this.top ,  
                });       
            },

        }
    }
</script>
<style lang='scss' scoped>
    .point__wrapper {
        position: absolute;
        width:30px;
        height: 30px;
        border-radius:50%;
        background-color: steelblue;
        opacity: 0.1;
        z-index:-1;
    }
</style>
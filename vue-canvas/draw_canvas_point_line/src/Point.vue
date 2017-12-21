
<template>
    <div class='point__wrapper' 
        :class='{del: top==deletePoint["y"] && left == deletePoint["x"]}'
        :style='{
            top: top - 15 + "px",
            left: left - 15 + "px"
        }'
        @mousedown.prevent.stop="onMouseDown" @mouseup='onMouseUp'
    >
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        props: ['top', 'left'],
      
        methods: {

            onMouseUp: function(e) {
                if(!this.deleteMode) {
                    this.$store.commit('pointClickDownStop', {
                        x:  this.left , 
                        y:  this.top ,  
                    });   
                    this.$emit('drawLines');    
                }
               
            },

            onMouseDown: function(e) {
                if(!this.deleteMode) {
                    console.log('point mouse down');
                    this.$store.commit('pointClickDownStart', {
                        x:  this.left , 
                        y:  this.top ,  
                    });  
                } else {
                    if(!this.deleteReady) {
                        this.deleteReady = true;
                        this.$store.commit('addDeletePoint', {
                            x:  this.left , 
                            y:  this.top ,  
                        });  
                    } else {
                        this.deleteReady = false;
                        this.$store.commit('deleteDeletePoint'); 
                    }
                    this.$forceUpdate();
                }
            },

        },
        computed: {
            ...mapState({
                deleteMode: (state)=> state.pointEvent.deleteMode,
                deletePoint: (state)=> state.pointEvent.deletePoint || {},
            })
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
        //z-index:1;
    }
    .del {
        border: 2px solid red;
    }
</style>
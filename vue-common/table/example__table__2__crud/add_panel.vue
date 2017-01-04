<template>
    <div class='add-panel__container'
         v-bind:class="{
            active : active
         }">

        <div class='bottom__section'>
            <div class='btn__wrapper'>
                <a class='btn__confirm'>Confirm</a>
            </div>
            <div class='btn__wrapper'>
                <a class='close__confirm' v-on:click='closeHandle'>Close</a>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        props: ['active'],
        data(){
            return{

            }
        },
        methods: {
            closeHandle:function() {
                this.$emit('closeHandle');
            }
        }
    }
</script>

<style lang='scss' scoped>
   .add-panel__container {
       width:200px;
       height:100%;
       background-color: rgba(grey, 0.3);
       position:absolute;
       left:-200px;
       top:0;
       transition:all 0.3s ease;
       &.active {
           left:0px;
       }
   }

   .btn__wrapper {
       display:flex;
       justify-content: center;
       align-items: center;
       margin-bottom:10px;
   }
   .btn__confirm {
       display:block;
       width:80px;
       height:30px;
       line-height:30px;
       background-color:steelblue;
       color: white;
       text-align: center;
   }
   .close__confirm {
       display:block;
       width:80px;
       height:30px;
       line-height:30px;
       background-color: coral;
       color: white;
       text-align: center;
   }
</style>

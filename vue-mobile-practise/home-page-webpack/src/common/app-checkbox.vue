<template>
   <input class='weui_switch' type=checkbox v-on:change='change'  />
</template>
<script>
    export default {
        methods: {
            change:function(){
                this.$emit('checkEvent')
            }
        }
    }
</script>
<style scoped>
   .weui_switch {
       -webkit-appearance: none;
       -moz-appearance: none;
       appearance: none;
       position: relative;
       width: 52px;
       height: 32px;
       border: 1px solid #dfdfdf;
       outline: 0;
       border-radius: 16px;
       box-sizing: border-box;
       background: #dfdfdf;
   }

   .weui_switch:checked {
       border-color: #04be02;
       background-color: #04be02;
   }

   .weui_switch:after, .weui_switch:before {
       content: " ";
       position: absolute;
       top: 0;
       left: 0;
       height: 30px;
       border-radius: 15px;
       -webkit-transition: -webkit-transform .3s;
       transition: -webkit-transform .3s;
       transition: transform .3s;
       transition: transform .3s,-webkit-transform .3s;
   }

   .weui_switch:checked:after {
       -webkit-transform: translateX(20px);
       transform: translateX(20px);
   }
   .weui_switch:after {
       width: 30px;
       background-color: #fff;
       box-shadow: 0 1px 3px rgba(0,0,0,.4);
   }
   .weui_switch:checked:before {
       -webkit-transform: scale(0);
       transform: scale(0);
   }
   .weui_switch:before {
       width: 50px;
       background-color: #fdfdfd;
   }
</style>
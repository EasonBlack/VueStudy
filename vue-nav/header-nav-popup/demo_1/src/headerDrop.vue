<template>
    <ul class="header__drop">
         <li class='header__drop_item'>
            <div class='placeholder__icon_circle'></div>
            <div>Account Setting</div>
         </li>
         <li class='header__drop_item header__drop_border'>
             <div class='placeholder__icon_circle'></div>
             <div>Help Center</div>
         </li>
         <li  class='header__drop_item'>
             <div class='placeholder__icon_circle'></div>
             <div>American</div>
         </li>
         <li  class='header__drop_item'>
             <div class='placeholder__icon_circle'></div>
             <div>Logout</div>
         </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {
        },
        methods: {
        },
        computed: {
        }
    }
</script>

<style lang='scss' scoped>
     .header__drop {
         position: absolute;
         width:85%;
         top: 100%;
         left: 20px;
         z-index:10;
         background-color:white;
     }
     .header__drop:after {
         position: absolute;
         top:-10px;
         right: calc(50% - 10px);
         width: 0;
         height: 0;
         display: block;
         content: '';
         border-left: 10px solid transparent;
         border-right: 10px solid transparent;
         border-bottom: 10px solid white;
     }

     .header__drop {
         margin-top: 10px;
         max-width: 345px;
         min-width:100px;
     }
     .header__drop_item {
         cursor: pointer;
         color: steelblue;
         display: flex;
         align-items: center;
         padding-left:10px;
         padding-right:10px;
         a {
            height:40px;
            line-height:40px;
            padding:10px;
         }
     }
     .header__drop_border {
        border-bottom: 1px solid grey;
        margin-bottom:10px;
        padding-bottom:10px;
     }
     .placeholder__icon_circle {
        width:30px;
        height:30px;
        background-color: #eee;
        border-radius: 50%;
        margin-right:10px;
     }
</style>
<template>
    <div class="box"
        v-drag
        :class='"w"+w + "h" + h'
        :random = 'random'
        :style="{
            width:w * 100 + '%',
            visibility : isHide ?'hidden': ''
        }"
        >
        <div class='move__icon' draggable="true">+</div>
    </div>
</template>
<script>
    export default {
        props:['w', 'h', 'random'],
        data() {
            return {
                isHide: false
            }
        },
        watch: {
            'random': function() {
                this.isHide= false;
            }
        },
        methods: {

        },
        mounted() {

        }

    }
</script>
<style lang='scss' scoped>
    .box {
        background-color: lightgreen;
        position:absolute;
        display:block;
        z-index:10;
        .hide {
            display:none;
        }
    }
    .box:before {
        content: "";
        display: block;
        padding-top: 100%;
    }
    .box.w1h1:before {
       padding-top: 100%;
    }
    .box.w2h1:before {
       padding-top: 50%;
    }
    .box.w2h2:before {
       padding-top:100%;
    }
    .content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .move__icon {
        position:absolute;
        top:10px;
        left:10px;
        font-size:19px;
        color: red;
    }
</style>
<template>
    <div class="box"
        draggable="true"
        v-drag
        :class='"w"+w + "h" + h'
        :style="{
            width:w * 100 + '%',
            visibility : isHide ?'hidden': ''
        }"
        >
        <div class="content">
        </div>
    </div>
</template>
<script>
    export default {
        props:['w', 'h'],
        data() {
            return {
                isHide: false
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
</style>
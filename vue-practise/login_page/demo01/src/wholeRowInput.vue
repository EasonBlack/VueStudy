<template>
    <div class="whole-row-input">
        <span :class='[icon]'></span>
        <input type=text :placeholder='placeholder' />
    </div>
</template>

<script>
    export default {
        props: [
            'placeholder',
            'icon'
        ],
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
    .whole-row-input {
        width:100%;
        height:100%;

        span {
            position:absolute;
            width:30px;
            height:30px;
            z-index:100;
            display:flex;
            justify-content:center;
            align-items:center;
            border-right: 1px solid grey;
        }

        input {
            height:30px;
            line-height:30px;
            padding-left: 40px;
        }
    }
</style>
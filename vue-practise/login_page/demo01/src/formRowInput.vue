<template>
    <div class="form-row-input">
        <label
            :style="{
                flex: '0 0 ' + w
            }"
        >
            {{title}}
        </label>
        <div class='input__wrapper'>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['w', 'title'],
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
    .form-row-input {
        width:100%;
        height:30px;
        display: flex;

    }
    label {
        display:inline-block;
        height:30px;
        font-weight:600;
        font-size:14px;
        line-height:30px;
        text-align:left;

    }
    .input__wrapper {
        flex:1;
        input {
            height:30px;
            line-height:30px;
            padding-left:10px;
        }
    }

</style>
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
        <template v-if='title2'>
            <label
                class='form__title2'
                :style="{
                    flex: '0 0 ' + w
                }"
            >
                {{title2}}
            </label>
            <div class='input__wrapper'>
                <slot name="input2"></slot>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: ['w', 'title', 'title2'],
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
        text-align:right;
        padding-right:20px;

    }
    .form__title2 {
         text-align:right;
    }
    .input__wrapper {
        flex:1;
        input {
            height:30px;
            line-height:30px;
            padding-left:10px;
            width:100%;
        }
    }

</style>
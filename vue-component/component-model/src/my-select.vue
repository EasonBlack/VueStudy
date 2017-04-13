<template>
    <div class="form-row__item_half">
        <label>{{title}}</label>
        <select :value="value" @change="$emit('input', $event.target.value)">
            <option v-for="o in items" :value="o[valuekey]">
                {{o[textkey]}}
            </option>
        </select>
    </div>
</template>

<script>

    export default{
        props: ['title', 'items', 'textkey', 'valuekey' , 'value'],
    }
</script>

<style lang='scss' scoped>
    .form-row__item_half{
        padding-right:20px;
        align-items: center;
        label{
            width: 125px;
            font-weight: bold;
        }
        input {
            flex: 1;
            display:inline-block;
            height:25px;
            padding: 0 10px;
        }
    }
</style>
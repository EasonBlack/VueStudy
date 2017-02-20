<template>
    <div class='add-panel__container'>
        <div class='panel__row'>
            <label>Name:</label>
            <input type='text' />
        </div>
        <div class='panel__row'>
            <label>Type:</label>
            <select>
                <option v-for='item in items'>{{item.name}}</option>
            </select>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['items'],
        data() {
            return {}
        }
    }
</script>
<style lang='scss' scoped>
    .add-panel__container {
        width:100%;
        border:2px solid steelblue;
        font-size:0.9em;

    }
</style>
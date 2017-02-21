<template>
    <div class='add-panel__container'>
        <div class='panel__row'>
            <label>Name:</label>
            <input type='text' v-model='eventName'/>
        </div>
        <div class='panel__row'>
            <label>Type:</label>
            <select v-model='eventType'>
                <option v-for='item in items' :value='item.id'>{{item.name}}</option>
            </select>
        </div>
        <div class='panel__row'>
            <a class='btn btn__full_width btn__add' @click='clickHandle'>ADD</a>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['items'],
        data() {
            return {
                eventName: '',
                eventType: ''
            }
        },
        methods: {
            clickHandle: function() {
                this.$emit('clickHandle', {
                    name: this.eventName,
                    type: this.eventType
                })
                this.eventName = '';
                this.eventType = '';
            }
        }
    }
</script>
<style lang='scss' scoped>
    .add-panel__container {
        width:100%;
        border:2px solid steelblue;
        padding:20px 5px;
    }
    .panel__row {
        display:inline-block;
        margin-bottom:10px;
        font-size:0.9em;
        width:100%;
        label {
            display:inline-block;
            width:40px;
        }
        input {
            width:120px;
            height:30px;
            line-height:30px;
        }
        select {
            width:120px;
            height:30px;
        }
    }
</style>
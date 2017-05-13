<template>
    <div class="cell"
    @dragover = 'dragOverHandle'
    @drop.prevent = 'dropHandle'
    @dragenter='dragEnterHandle'
    @dragleave='dragLeaveHandle'
    :class='{
        active: isActive
    }'
    >
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props:['index'],
        data() {
            return {
                isActive : false
            }
        },
        methods: {
             dragOverHandle(e) {
                 e.preventDefault();
                 return false;
             },
             dropHandle(e) {
                 let box=e.dataTransfer.getData("box");
                 this.$emit('dropDown', { target: this.index, box})
             },
             dragEnterHandle(e) {
                this.isActive = true;
             },
             dragLeaveHandle(e) {
                this.isActive = false;
             }
        }
    }
</script>
<style lang='scss' scoped>
    .cell {
        width:20%;
        border:1px solid steelblue;
        position:relative;
        display:block;
    }
    .cell.active {
        background-color: rgba(steelblue,0.2)
    }

    .cell:before {
        content: "";
        display: block;
        padding-top: 100%;
    }

    .content {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
</style>
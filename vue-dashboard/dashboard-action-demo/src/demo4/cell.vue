<template>
    <div class="cell"
         @dragover = 'dragOverHandle'
         @drop.prevent = 'dropHandle'
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
                 console.log(this.index);
                 this.$emit('dragOver', { target: this.index})
                 return false;
             },
             dropHandle(e) {
                 let boxid = e.dataTransfer.getData("box");
                 this.$emit('dropDown', { target: this.index, boxid})
             },
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
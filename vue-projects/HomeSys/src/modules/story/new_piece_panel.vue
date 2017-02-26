<template>
    <div class='new-panel__wrapper'>
        <div class='new-panel__input'>
            <textarea v-model='content'></textarea>
        </div>
        <div class='new-panel__button flex__h-center'>
            <a class='btn btn__save' @click='AddPieceHandle'>Add Piece</a>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                content : ''
            }
        },
        methods: {
            AddPieceHandle: function() {
                this.$emit('AddPieceHandle', this.content);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .new-panel__wrapper {
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
    }
    .new-panel__input {
        flex:1;
        padding:10px;
        textarea {
            width:100%;
            height:100%;
            padding:10px;
        }
    }

    .new-panel__button {
        line-height:50px;
        height:50px;
        justify-content: flex-end;
        padding:10px;
    }

</style>
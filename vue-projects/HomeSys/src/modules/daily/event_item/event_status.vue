<template>
    <div class='status__container'>
        <a class='close_button flex__center' @click='clickHandle'>X</a>
        <a class='update_button' @click='closeEventItem' >Close</a>
        <a class='pend_button' @click='pendEventItem' >Pend</a>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            clickHandle: function() {
                this.$emit('menuCloseHandle');
            },
            closeEventItem: function() {
                this.$emit('closeEventItem')
            },
            pendEventItem: function() {
                this.$emit('pendEventHandle')
            }
        }
    }
</script>
<style lang='scss' scoped>
    .status__container {
        position: absolute;
        width: 70%;
        height: 40px;
        background-color: rgba(grey,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index:10;
        padding: 0 20px;
        .update_button {
            display:inline-block;
            font-size:0.7em;
            color: white;
            padding:5px;
            background-color: #ca1549;
            margin-right:10px;
        }
        .pend_button {
            display:inline-block;
            font-size:0.7em;
            color: white;
            padding:5px;
            background-color: steelblue;
        }
        .close_button {
            position:absolute;
            top:-5px;
            right:-5px;
            width:20px;
            height:20px;
            background-color: black;
            color: white;
            border-radius: 50%;
            font-size: 0.9em;

        }

    }
</style>
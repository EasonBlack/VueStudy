<template>
    <div class='bigcontent-wrapper'>
        <pre>{{content}}</pre>
        <i class="fa fa-close" @click='close'></i>
    </div>
</template>
<script>
    export default {
        props: ['content'],
        data() {
            return {
              
            }
        },
        created() {
           
          
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>
<style lang='scss' scoped>
    .bigcontent-wrapper {
        position: absolute;
        width:100%;
        height: 90%;
        padding: 10px;
        top: 0;
        color: white;
        background-color: rgba(black, 0.9);
        border: 2px solid #41bb8a;
        border-radius: 10px;
        overflow: auto;

        ul {
            display: flex;
            justify-content: flex-start;
            padding-left: 0px;
            margin-bottom:5px;
            li {
                font-size:16px;
            }
        }

        pre {
            color: white;
            white-space: pre-wrap;
        }

        .fa-close {
            background-color: steelblue;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 10px;
            right: 10px;
        }
    }
</style>
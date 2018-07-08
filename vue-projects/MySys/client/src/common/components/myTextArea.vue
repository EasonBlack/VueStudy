<template>
     <textarea class='textarea' @keydown='handleTab' 
     :style="{
         minHeight: height ? height + '%' : '100%' 
     }"
     :value="value"
     @input="$emit('input', $event.target.value)"
    ></textarea>
</template>
<script>
    export default  {
        props: ['value', 'height'],
        methods: {
            handleTab(e) {
                let el = e.target;
                if(e.keyCode === 9)  {
                    var start = el.selectionStart;
                    var end = el.selectionEnd;
                    var value = el.value;
                    value = value.substring(0, start)
                                + "\t"
                                + value.substring(end);
                    e.target.value = value;
                    el.selectionStart = el.selectionEnd = start + 1;
                    e.preventDefault();
                }
            },
        }
    }
</script>
<style lang='scss' scoped>
    textarea {
        width:100%;
        background-color: white;
        border: 1px solid steeblue;
        padding:10px;
        resize: none;
    }
</style>
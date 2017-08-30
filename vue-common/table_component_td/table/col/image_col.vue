
<template>
    <div class='image-col'>
        <img :src='image' :style='{width: size}' />
        <div class='image-col__desc'>{{desc}}</div>
    </div>
</template>
<script>
    export default {
        props: ['image', 'size', 'desc']
    }
</script>
<style lang='scss' scoped>
    .image-col {

    }
    .image-col__desc {
        font-size:13px;
        color: grey;
    }
</style>
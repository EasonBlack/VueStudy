
<template>
    <div class='col'>
        <div class='col__value'>{{value}}</div>
        <div class='col__desc'>{{desc}}</div>
    </div>
</template>
<script>
    export default {
        props: ['value', 'desc']
    }
</script>
<style lang='scss' scoped>
    .col {
      position:relative;
      padding: 10px 0px;
    }
    .col__value {
      font-weight:700;
    }
    .col__desc {
        position: absolute;
        bottom:-1px;
        left:0px;
        font-size:13px;
        color: grey;
    }
</style>
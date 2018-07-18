<template functional>
    <span>
        <div class='row-wrapper d-flex'>
            <label class='mr-10 font-weight-bold font-14'>Name:</label>
            <label class='font-cc flex-1'>{{props.item.NAME}}</label>
        </div>
        <div  class='row-wrapper d-flex'>
            <label class='mr-10 font-weight-bold  font-14'>Status:</label>
            <label class='font-cc flex-1'>{{props.item.STATUS}}</label>
        </div>
        <div  class='row-wrapper'>
            <label class='font-weight-bold  font-14'>Desc:</label>
            <pre  class='font-cc'>{{props.item.DESC}}</pre>
        </div>
    </span>
</template>
<script>
    export default {
        props: ['item']
    }
</script>
<style lang='scss' scoped>
    .row-wrapper {    
        padding-left: 20px;
        width:100%;
        label:first-child {
            width:30%;
        }
        label {
            color: white;
            font-size:16px;
            height: 40px;
            line-height:40px;
        }
        .font-cc {
            color: #ccc; 
            text-shadow: -1px 0px #fff, 1px 0px #333;
        }
       
    }
</style>
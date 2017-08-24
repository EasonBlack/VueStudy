<template>
    <ul>
        <li>
            <div
                :style='{
                    backgroundColor: item ? item.color :false
                }'
            ></div>
            </div>{{item?item.title:''}}</div>
        </li>
        <li>OverView</li>
        <li>New Unit</li>
        <li>New Unit</li>
    </ul>
</template>
<script>
    export default {
        props: ['item']
    }
</script>
<style lang='scss' scoped>
    ul {
        display:block;
    }
    li:first-child {
        width:100%;
        height:40px;
        line-height:40px;
        display:flex;
        div:first-child {
            width:30px;
            height:100%;
        }
        div:last-child {
            flex:1;
            padding-left:10px;
            justify-content:center;
        }
    }
    li {
        height:30px;
        line-height:30px;
        width:100%;
        background-color: #eee;
        position:relative;
    }
</style>
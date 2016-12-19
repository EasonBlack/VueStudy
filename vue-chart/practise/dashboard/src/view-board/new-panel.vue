<template>
    <div class='container'
        v-bind:class='{
            active: active
        }'
        v-on:click='toggleAddPanel'
        >
        <div class='edit__section'>
            <label>Title</label>
            <input type=text placeholder="title" />
        </div>
        <div class='edit__section'>
            <label>Size</label>
            <input type=radio name='size' value='1' />
            <input type=radio name='size' value='0.5' />
            <input type=radio name='size' value='0.3' />
        </div>
        <div class='edit__section'>
            <label>Type</label>
            <select>
                <option>aaaa</option>
                <option>aaaa</option>
                <option>aaaa</option>
            </select>
        </div>
        <div class='close__section' v-on:click='close'>
            <img :src='closeImg'>
        </div>
    </div>
</template>

<script>
    import closeImg from 'assets/icons/close.png'
    export default{
        props: ['active'],
        data(){
            return{
                closeImg
            }
        },
        methods: {
            close:function() {
                this.$emit('toggleAddPanel',0);
            }
        }
    }
</script>

<style lang='scss' scoped>
    .container {
        width:100vw;
        height:300px;
        background-color: steelblue;
        position:absolute;
        bottom:0;
        left:0;
        margin-bottom:-300px;
        transition:all 0.5s ease-out;
        display:flex;
        flex-wrap: wrap;
        &.active {
            margin-bottom:0px;
        }
    }

    .edit__section {
        padding-left:20px;
        align-items: center;
        flex:1;
        min-width:50vw;
        display: flex;
    }
    .close__section {
        position:absolute;
        right:20px;
        top:20px;
    }


</style>

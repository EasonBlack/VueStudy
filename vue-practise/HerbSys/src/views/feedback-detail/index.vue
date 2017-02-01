<template>
    <div class='feedback-detail__container'>
         <div class='detail__header'>
            <detail-cell :title='"Name"' :content='detail[0].name'></detail-cell>
            <detail-cell :title='"Date"' :content='detail[0].date'></detail-cell>
            <detail-cell :title='"Time"' :content='detail[0].time'></detail-cell>
         </div>
         <div class='detail__content'>
             <div class='detail__body'>
                <img :src='config.apiHost + "site_images/" + detail[0].feed_id + "_body.png"'/>
             </div>
             <div class='detail__answer'>
                 <detail-answer v-for='d in detail' :title='d.title' :contents='d.answers'></detail-answer>
             </div>
         </div>
         <div class='detail__close' @click='closeHandle'>X</div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import detailCell from './cell.vue';
    import detailAnswer from './answer_cell.vue';
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    export default {
        components: {detailCell, detailAnswer},
        props: ['detail'],
        data: function() {
            return  {
                config : Vue.pconfig
            }
        },
        methods: {
            closeHandle: function() {
                this.$emit('closeHandle')
            }
        }
    }
</script>

<style lang='scss' scoped>
    .feedback-detail__container {
        background-color:white;
        box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.5);
        position: absolute;
        margin-top: 60px;
        width: 90%;
        top: 0;
        display: flex;
        flex-direction:column;
        justify-content: center;
    }
    .detail__header {
        width:100%;
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;

        background-color: #C0C0C0;
        div {
            flex: 0 0 50%;
        }
    }
    .detail__content {
        display:flex;

        .detail__body {
            padding-top:20px;
            padding-bottom:20px;
            flex: 0 0 40%;
            img {
                display:block;
                max-width: 100%;
                max-height: 100%;
            }
            border-right: 1px solid  rgba(steelblue, 0.6);
        }
        .detail__answer {
            flex:1;
            overflow:auto;
            padding-top:20px;
        }
    }
    .detail__close {
        position:absolute;
        top: -20px;
        right: -20px;
        background-color: rgba(black , 0.9);
        color:white;
        width:40px;
        height:40px;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius:50%;
    }
</style>
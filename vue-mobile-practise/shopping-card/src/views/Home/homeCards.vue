<template>
    <div class="container">
        <ul>
            <li v-for="item in items">
                <coupon-card :coupon="item"></coupon-card>
            </li>
        </ul>
    </div>
</template>

<script>
    import couponCard from '../../common/coupon-card/index.vue'
    export default{
        props: ['items'],
        components:{
           couponCard
        },
        data(){
            return{

            }
        },

    }
</script>

<style lang='scss' scoped>
    .container {
        width:100vw;
        padding:10px;
    }
</style>

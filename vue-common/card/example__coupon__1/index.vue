<template>
    <div class='card__wrapper'>
        <div class='up'>
            <div class='left__content'>
                <div class='content__title'><span class='coupon__icon'>优惠</span>{{coupon.title}}</div>
                <div class='content__detail'>{{coupon.detail}}</div>
            </div>
            <div class='right__image'>
                <img :src="coupon.src"/>
            </div>
        </div>
        <div class='down'>
            <div class='down__name'>{{coupon.address}}</div>
            <div class='down__icon'>{{coupon.distance}}</div>
        </div>
    </div>
</template>

<script>

    export default{
        props:['coupon'],
        data(){
            return{

            }
        }

    }
</script>

<style lang='scss' scoped>
    .card__wrapper {
        width:100%;
        display:flex;
        flex-direction:column;
        background-color: white;
        overflow:hidden;
    }

    .up {
        height: 130px;
        display:flex;
        padding:5px;
        position:relative;
        &::after {
            content: '';
            position: absolute;
            height: 1px;
            bottom: 0px;
            left: 5px;
            right: 5px;
            background-color: rgba(grey, 0.2);
        }
    }
    .coupon__icon {
        display: inline-block;
        color: white;
        width: 38px;
        padding: 0 5px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        background-color: #EB008B;
        border-radius: 2px;
        font-size: 0.6em;
        margin-right: 5px;
    }
    .left__content {
        flex:1;
        display:flex;
        flex-direction: column;
        .content__title {
            height:40px;
            font-size: 0.9em;
            font-weight: bold;
        }
        .content__detail {
            flex:1 ;
            font-size: 0.9em;
            color: #969696;
        }
    }
    .right__image {
        width:120px;
        img {
            display:block;
            width:100%;
            height:100%;
        }
    }

    .down {
        height:50px;
        display:flex;
        flex-direction:row;
        padding:5px;
        align-items: center;
        .down__name {
            font-size: 0.9em;
            flex:1;
        }
        .down__icon {
            width:100px;
            color: #969696;
            font-size:0.8em;
            justify-content: flex-end;
            display: flex;
        }
    }


</style>

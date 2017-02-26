<template>
    <transition-group class='piece-list__wrapper' name="flip-list" tag="ul">
        <li v-for='(c, index) in pieces' class='new-piece__wrapper flex__center'  v-bind:key="c">
            <piece-card :card='c' :index='index'></piece-card>
            <a class='btn__close flex__center' @click='deletePiece(c)'>x</a>
        </li>
    </transition-group>
</template>
<script>
    import PieceCard from '../card.vue';
    export default {
        components: {PieceCard},
        props:['pieces'],
        methods: {
            deletePiece : function(c) {
              this.$emit('deletePiece', c)
            }
        }
    }
</script>
<style lang='scss' scoped>
    .piece-list__wrapper {

        position:relative;
        width:100%;
        transition:all 0.2s ease;
        li {
            display:block;
            position:relative;
            width:100%;
            height:150px;
            border-bottom:1px solid grey;
            margin-bottom:10px;
            padding:10px;
        }
    }
    .flip-list-move {
        transition: transform 1s;
    }
    .btn__close {
        position:absolute;
        top:0px;
        right:0px;
        width:20px;
        height:20px;
        background-color:black;
        color: white;
    }
</style>
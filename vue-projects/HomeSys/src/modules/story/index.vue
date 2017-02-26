<template>
    <div class='story__container'>
        <div class='header__container'>
            <div class='left__wrapper flex__h-center'>
                 <select>
                     <option>aaaa</option>
                 </select>
            </div>
            <div class='right__wrapper flex__h-center '>
                <a class='btn btn__save'>Save</a>
                <a class='btn btn__add' @click='addNewPiecePanel'>Add</a>
                <div class='new-panel__container' v-if='showNewPiecePanel'>
                    <new-piece-panel @AddPieceHandle='AddPieceHandle'></new-piece-panel>
                 </div>
            </div>

        </div>
        <div class='content__container'>
            <div class='grid__container' >
                <story-grid :colNum='colNum' :rowNum='rowNum'></story-grid>
            </div>
            <div class='right__container'>
                <new-pieces-list :pieces='newPieces' @deletePiece='deletePiece'></new-pieces-list>
            </div>
        </div>
    </div>
</template>
<script>
    import storyGrid from './story_grid/index.vue';
    import newPiecesList from './new_pieces/index.vue';
    import newPiecePanel from './new_piece_panel.vue';
    export default {
        components: {storyGrid, newPiecesList, newPiecePanel},
        data() {
            return {
                colNum : 7,
                rowNum: 7,
                newPieces: [],
                showNewPiecePanel: false
            }
        },
        methods: {
            addNewPiecePanel: function () {
                this.showNewPiecePanel = !this.showNewPiecePanel;
            },
            deletePiece: function(index) {
                this.newPieces.splice(index, 1);
            },
            AddPieceHandle: function(c) {
                this.newPieces.unshift({content: c});
                this.showNewPiecePanel = false;
            }
        },
        computed: {
            newPiecesReverse: function() {
                return this.newPieces.reverse();
            }
        }
    }
</script>
<style lang='scss' scoped>
    .story__container {
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
    }
    .left__wrapper {
        width:100px;
        select {
            width:100px;
            height: 30px;
        }
    }
    .right__wrapper {
        flex:1;
        position:relative;
        justify-content: flex-end;
        a {
            margin-right:10px;
        }
    }
    .content__container {
        width:100%;
        flex:1;
        display:flex;
        border-top: 1px solid rgba(grey, 0.8);
    }
    .grid__container {
        flex:1 0;
        position:relative;
        background-color:rgba(grey, 0.5);
        overflow:auto;
    }
    .right__container {
        flex:0 0 150px;
        background-color:white;
        overflow: auto;
    }
    .new-panel__container {
        border: 1px solid grey;
        position:absolute;
        bottom:-200px;;
        right:0;
        width:300px;
        height:200px;
        background-color:white;
        z-index:10;
    }
</style>
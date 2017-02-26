<template>
    <div class='grid__wrapper'>
         <div v-for='i in rowNum' class='row__wrapper' >
             <div class='card__wrapper' v-for='(j, index) in colNum'
                  v-bind:class="{
                     active: i==activeX && j == activeY
                  }"
                  @dragover.prevent
                  @drop="onDrop(i,j,$event)"
                  @dragover='onDragover(i,j,$event)'
             >

             </div>
         </div>
    </div>
</template>
<script>
    export default {
        props: ['rowNum', 'colNum', 'cards'],
        data() {
            return {
                activeX: '',
                activeY: ''
            }
        },
        methods: {
            setCard: function(i,j) {
                let _item = this.cards.find(item=> { return item.x == i && item.y ==j});
                return _item
            },
            onDrop: function(i,j,ev) {
                let _hasItem = this.cards.find(item=> { return item.x == i && item.y ==j});
                this.activeX = '';
                this.activeY = '';
                if(_hasItem) {
                    return;
                }
                let _id = ev.dataTransfer.getData("card_id");
                let _item = this.cards.find(item=> { return item.id == _id});
                _item.x = i;
                _item.y = j;
            },
            onDragover:function(i,j,ev) {
                this.activeX = i;
                this.activeY = j;
            }
        }
    }
</script>
<style lang='scss' scoped>
    .grid__wrapper {
        width:100%;
        height:100%;
        position:relative;
        overflow:auto;
    }
    .row__wrapper {
       display:flex;
       flex-direction:row;
    }
    .card__wrapper {
          width:100px;
          min-width:100px;
          height:100px;
          padding:10px;
          border-right: 1px solid rgba(white,1);
          border-bottom: 1px solid rgba(white,1);
          &.active {
              background-color:lightseagreen;
          }
    }
</style>
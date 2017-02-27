<template>
    <div class='grid__wrapper'>
         <div v-for='i in rowNum' class='row__wrapper' >
             <div class='card__wrapper' v-for='(j, index) in colNum'
                  v-bind:class="{
                     active: j==activeX && i== activeY
                  }"
                  @dragover.prevent
                  @drop="onDrop(i,j,$event)"
                  @dragover='onDragover(i,j,$event)'
             >
                 <story-card v-if='setCard(i,j)' :card='setCard(i,j)'></story-card>
             </div>
         </div>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import storyCard from '../card.vue';
    export default {
        components: {storyCard},
        props: ['rowNum', 'colNum'],
        data() {
            return {
                activeX: '',
                activeY: ''
            }
        },
        methods: {
            setCard: function(i,j) {
                let _item = this.storyPieces.find(item=> { return item.x == j && item.y ==i});
                return _item
            },
            onDrop: function(i,j,ev) {
                let _hasItem = this.storyPieces.find(item=> { return item.x == j && item.y ==i});
                this.activeX = '';
                this.activeY = '';
                if(_hasItem) {
                    return;
                }
                let _id = ev.dataTransfer.getData("card_content");

                this.$store.commit('setStoryPiece', {tempid: _id,  x:j, y:i})
            },
            onDragover:function(i,j,ev) {
                this.activeX = j;
                this.activeY = i;
            }
        },
        computed: {
            ...mapState({
               storyPieces: (state) => {
                    return state.storyPiece.current.filter((o)=> { return o.x !=-1 && o.y !=-1});
               }
            }),
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
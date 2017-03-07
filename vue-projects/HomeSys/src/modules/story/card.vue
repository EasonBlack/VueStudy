
<template>
    <div class='piece-card__wrapper flex__center'  draggable="true"
          v-bind:class='{
              active: active,
              big: expand
           }'
           @dragstart='handleDragstart'
           @dragend='handleDragend'
           @click='handleBig'
    >
        {{recodeContent}}
        <textarea v-bind:class='{
                active: editable
              }'
              v-model='newContent' @click.prevent.stop='textareaClickHandle'>
        </textarea>
         <a class='btn btn__add edit'
          v-bind:class='{
            active: expand
          }'
         @click.prevent.stop='EditPieceHandle'>
            Edit
         </a>
         <a class='btn btn__save save'
           v-bind:class='{
             active: editable
           }'
          @click.prevent.stop='SavePieceHandle'>
             Save
         </a>
         <a class='btn btn__add cancel'
           v-bind:class='{
             active: editable
           }'
          @click.prevent.stop='CancelPieceHandle'>
             Cancel
         </a>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    export default {
        props: ['card'],
        data() {
            return {
                expand: false,
                editable: false,
                newContent: '',
            }
        },
        created: function() {
            this.newContent = this.card.content;
        },
        methods: {
            handleDragstart: function(ev) {
                this.active = true;
                ev.dataTransfer.setData("card_content",  this.card.id + '_' + this.card.tempid );
            },
            handleDragend: function(ev) {
                this.active = false;
            },
            handleBig: function() {
                if(this.card.x<=0 || this.card.y<=0) return ;
                this.expand = !this.expand;
            },
            EditPieceHandle() {
                this.editable = true;
            },
            SavePieceHandle() {
                this.$store.dispatch('editStoryPiece', {
                    id: this.card.id,
                    item_id: this.card.item_id,
                    type: this.card.type,
                    content: this.newContent
                });
                this.expand = false;
                this.editable= false;
            },
            CancelPieceHandle() {

                this.expand = false;
                this.editable= false;
            },
            textareaClickHandle() {
                return false;
            }

        },
        computed: {
            recodeContent : function() {

                 let _t = this.card.content;
                 if(_t.length > 20 && !this.expand) {
                    _t = _t.substring(0, 20) + '...';
                 }
                return _t;
            }
        }
    }
</script>
<style lang='scss' scoped>
    .piece-card__wrapper {
        width:100%;
        height:100%;
        background-color:yellow;
        position:relative;
        font-size: 0.7em;
        display: flex;
        justify-content: flex-start;
        overflow: auto;
        align-items: flex-start;

        &.active {
           opacity:0.4;
           transform: scale(0.8);
        }
        &.big  {
            position:absolute;
            padding:10px;
            width: 250px;
            height:100%;
            font-size:0.9em;
            z-index:100;
        }

        a {
             position:absolute;
             bottom:5px;
             display:none;
             z-index:20;
        }
        a.active {
            display:block;
        }
        a.edit {
            right:5px;
        }
        a.save {
            right:75px;
        }

        a.cancel {
             right:5px;
         }

        textarea {
            position:absolute;
            width:100%;
            height:100%;
            top:0;
            left:0;
            display:none;
        }
        textarea.active {
            display:block;
        }
    }
</style>
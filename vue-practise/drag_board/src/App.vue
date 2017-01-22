<template>
    <div class='container'>
        <div class='header__container'>
            <div class='other__container'></div>
            <div class='btn__container'>
                <a class='board__btn' @click='addCol'>Col</a>
                <a class='board__btn' @click='addRow'>Row</a>
                <a class='board__btn btn__red'>Save</a>
            </div>
        </div>
        <div class='content__container col__container'>
            <div v-for='i in rowNum' class='row__container' >
                <div class='card__container' v-for='(j, index) in colNum'
                     v-bind:class="{
                        active: i==activeX && j == activeY
                     }"
                     @dragover.prevent
                     @drop="onDrop(i,j,$event)"
                     @dragover='onDragover(i,j,$event)'
                >
                    <card v-if='setCard(i,j)' :item='setCard(i,j)'></card>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import card from './card/index.vue';
	export default {
	    components: {card},
		data: function() {
			return {
			    colNum : 5,
			    rowNum: 5,
			    activeX: '',
			    activeY: '',
                items : [
                    {id:1,pos:{x:1,y:1}, title: 'aaaa', content: 'aa aaa aaaaa'},
                    {id:2,pos:{x:2,y:2}, title: 'bbbb', content: 'bb bbb bbbb'},
                    {id:3,pos:{x:1,y:2}, title: 'cccc', content: 'ccc cccc ccccc'}
                ]
			}
		},
		methods: {
		    addCol: function() {
		        this.colNum = this.colNum + 1;
		    },
		    addRow: function() {
		        this.rowNum = this.rowNum + 1;
		    },
		    setCard: function(i,j) {
		        let _item = this.items.find(item=> { return item.pos.x == i && item.pos.y ==j});
		        return _item
		    },
		    onDrop: function(i,j,ev) {
		        let _hasItem = this.items.find(item=> { return item.pos.x == i && item.pos.y ==j});
		        this.activeX = '';
                this.activeY = '';
		        if(_hasItem) {
		            return;
		        }
                let _id = ev.dataTransfer.getData("card_id");
                let _item = this.items.find(item=> { return item.id == _id});
                _item.pos.x = i;
                _item.pos.y = j;
            },
            onDragover:function(i,j,ev) {
                this.activeX = i;
                this.activeY = j;
            }

		}
	}

</script>
<style lang='scss' scoped>

    .container {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow:hidden;
    }
    .header__container {
        height:60px;
        line-height:60px;
        display:flex;
        width: 100vw;
    }
    .content__container {
        width:100vw;
        overflow:auto;
        background-color:rgba(grey, 0.7);
        padding-bottom:20px;
        display: flex;
    }
    .other__container {
        flex:1;
    }
    .col__container {
        display:flex;
        flex-direction:column;
    }
    .row__container {
        display:flex;
        flex-direction:row;
    }
    .card__container {
        width:200px;
        height:200px;
        padding:10px;
        border-right: 1px solid rgba(white,1);
        border-bottom: 1px solid rgba(white,1);
        &.active {
            background-color:lightseagreen;
        }
    }

    .btn__container {
        flex:0 0 300px;
    }


    .board__btn {
        background-color: steelblue;
        width:50px;
        padding:10px 20px;
        color: white;
    }

    .btn__red {
        background-color: lightcoral;
    }


</style>
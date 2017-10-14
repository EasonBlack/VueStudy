<template>
    <div class='type-group__container'>
        <div class='type-group__title'>
            <span>{{groupName}}</span>
        </div>
        <ul>
            <li v-for='item in group.items'>
                <span v-if='!item.showRenameInput'>{{item.name}}</span>
                <span v-if='item.showRenameInput'>
                    <input v-model='currentName' />
                    <a class='btn btn__save' @click='handleRename(item)'>Confirm</a>
                </span>
                <span class='item__action active' v-if='currentType!="1"' @click='eventTypeChange(item, 1)'>A</span>
                <span class='item__action close'  v-if='currentType!="2"' @click='eventTypeChange(item, 2)'>C</span>
                <span class='item__action pend'   v-if='currentType!="3"' @click='eventTypeChange(item, 3)'>P</span>
                <span class='item__action rename'  @click='toggleRenameInput(item)'>R</span>
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    export default {
        props: ['group'],
        data() {
            return {
                showRenameInput : false,
                currentName: null
            }
        },
        methods: {
            eventTypeChange(item,type) {
                this.$store.dispatch('changeEventItemType', {
                    id: item.id,
                    origintype:this.currentType,
                    resulttype: type
                });
            },
            toggleRenameInput(item) {
                this.currentName = item.name;

                item.showRenameInput &&
                (this.currentName = null)

                item.showRenameInput  = !item.showRenameInput;

                this.$forceUpdate();
            },
            handleRename(item) {
                this.$store.dispatch('updateEventType', {
                    id: item.id,
                    name: this.currentName
                }).then(()=>{
                    console.log(123123123);
                    this.$emit('refresh-handle', {});
                })

            }
        },
        computed: {
           ...mapState({
             eventTypes: (state) => {
                  return state.eventType.all;
             },
             currentType:(state)=> state.eventType.currentType
           }),
           groupName: function() {
               return this.eventTypes.find((o)=> { return o.id == this.group.name}).name;
           }
        }
    }
</script>
<style lang='scss' scoped>
    .type-group__container {
        border: 2px solid lightgreen;
        margin-bottom:20px;
    }
    .type-group__title {
        height:30px;
        line-height:30px;
        padding:0 10px;
        background-color: lightgreen;
    }
    ul {
        display:block;
        border-radius:2px;

        li {
            padding:10px;
        }
        li:hover {
            background-color: #ccc;
            .item__action {
                display:inline-block;
            }
            .active {
                  background-color: lightgreen;
            }
            .close {
                   background-color: #e27070;
            }
            .pend {
                  background-color: #ecec19;
            },
            .rename {
                background-color: steelblue;
            }
        }
        .item__action {
            width:15px;
            height:15px;
            inline-height:15px;
            text-align:center;
            border-radius:50%;
            color:white;
            display:none;
            font-size:14px;
            cursor: pointer;
        }
        input {
            height: 30px;
            line-height: 30px;
            width: 100px;
        }

    }
</style>
<template>
    <div class='type-group__container'>
        <div class='type-group__title'>{{groupName}}</div>
        <ul>
            <li v-for='item in group.items'>
                <span>{{item.name}}</span>
                <span class='item__action active' v-if='currentType!="1"' @click='eventTypeChange(item, 1)'>A</span>
                <span class='item__action close'  v-if='currentType!="2"' @click='eventTypeChange(item, 2)'>C</span>
                <span class='item__action pend'   v-if='currentType!="3"' @click='eventTypeChange(item, 3)'>P</span>
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    export default {
        props: ['group'],
        data() {
            return {}
        },
        methods: {
            eventTypeChange(item,type) {
                this.$store.dispatch('changeEventItemType', {
                    id: item.id,
                    origintype:this.currentType,
                    resulttype: type
                });
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

    }
</style>
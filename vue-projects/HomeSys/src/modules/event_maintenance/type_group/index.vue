<template>
    <div class='type-group__container'>
        <div class='type-group__title'>
            <span>{{groupName}}</span>
            <span class='type-group__chart icon-picture' @click='showTypeChart'/>
        </div>
        <ul>
            <li v-for='(item,$index) in group.items' :key='$index'>
                <span v-if='!item.showRenameInput'>{{item.name}}</span>
                <span v-if='item.showRenameInput'>
                    <input v-model='currentName' />
                    <a class='btn btn__save' @click='handleRename(item)'>Confirm</a>
                </span>
                <span class='item__action active' v-if='currentType!="1"' @click='eventTypeChange(item, 1)'>A</span>
                <span class='item__action close'  v-if='currentType!="2"' @click='eventTypeChange(item, 2)'>C</span>
                <span class='item__action pend'   v-if='currentType!="3"' @click='eventTypeChange(item, 3)'>P</span>
                <span class='item__action rename'  @click='toggleRenameInput(item)'>R</span>
                <span class='item__action icon-picture' @click='showItemChart(item)'/>
            </li>
        </ul>
        <item-bar v-if='showItemBarChart' :items='itemBarData' 
        :start='chartStart' :end='chartEnd'
        @closeChart='closeChart'/>
           <!-- :start='monthAgeDate' :end='currentDate' -->
    </div>
</template>
<script>
    import itemBar from '$common/item-bar/index.vue';
    import moment from 'moment';
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    export default {
        components: {itemBar},
        props: ['group'],
        data() {
            return {
                showRenameInput : false,
                currentName: null,
                showItemBarChart: false,
                itemBarData: null,

                currentDate: moment().format('YYYY-MM-DD'),
                monthAgeDate:  moment().subtract(1,'month').format('YYYY-MM-DD')
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
                    this.$emit('refresh-handle', {});
                })

            },
            closeChart() {
                this.showItemBarChart = false;
            },
            showItemChart(item) {
                let req = {}
                if(this.currentType == 2) {
                    req = {id: item.id}
                } else {
                    req = {id: item.id, start:this.monthAgeDate, end:this.currentDate}
                }
                this.$store.dispatch('fetchDailyByEventId', req)
                .then(res=>{
                    if(this.currentType == 2) {
                        this.chartStart = res[0].date;
                        this.chartEnd = res[res.length-1].date;
                    } else {
                        this.chartStart = this.monthAgeDate;
                        this.chartEnd = this.currentDate;
                    }
                  
                    this.itemBarData = res;
                    this.showItemBarChart = true;
                 })             
            },
            showTypeChart() {
                 this.$store.dispatch('fetchDailyByTypeId', {id: this.group.name, start:this.monthAgeDate, end:this.currentDate})
                .then(res=>{               
                    this.itemBarData = res;
                    this.chartStart = this.monthAgeDate;
                    this.chartEnd = this.currentDate;
                    this.showItemBarChart = true;
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
        display:flex;
        background-color: lightgreen;
        .type-group__chart  {
            margin-left: auto;
            color:white;
            cursor:pointer;
        }
    }
    ul {
        display:block;
        border-radius:2px;
        max-height:500px;
        overflow-y:auto;
        overflow-x:hidden;
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
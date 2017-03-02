<template>
    <div class='daily__container'>
         <div class='daily__current'>
            <daily-header :title='current' @updateCurrent='updateCurrent'></daily-header>
         </div>

         <div class='daily__content'>
             <div class='panel__container'>
                 <add-panel @clickHandle='dailySave'></add-panel>
                 <daily-list :items='dailyItems' v-if='dailyItems && dailyItems.length' @showUpdateHandle='showUpdateHandle'></daily-list>
                 <update-panel v-if='showUpdate' :item='currentItem' @updateCancel='updateCancel' @updateHandle='updateHandle'></update-panel>
             </div>
             <div class='event-list__container'>
                <event-item v-for='e in eventItems' :item='e' @clickHandle='eventItemClick' :activeId="activeId"></event-item>
             </div>
         </div>

    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import moment from 'moment';
    import addPanel from './add_panel/index.vue';
    import eventItem from './event_item/index.vue';
    import dailyList from './daily_list/index.vue';
    import dailyHeader from './daily_header/index.vue';
    import updatePanel from './update_panel/index.vue';
    export default {
        components:{addPanel, eventItem, dailyList, dailyHeader, updatePanel},

        data() {
            return {
                 current: moment().format('YYYY-MM-DD'),
                 selectedEventItem: null,
                 activeId: null,
                 showUpdate: false,
                 currentItem: null
            }
        },
        created:function() {
            this.$store.dispatch('fetchEventItemsActive');
            this.$store.dispatch('fetchDaily', this.current);
        },
        methods: {
            ...mapActions({
                postDaily: 'postDaily'
            }),
            dailySave: function(o) {
                let _d = Object.assign({},o,{type: this.selectedEventItem.id, date: this.current} );
                this.postDaily(_d);
            },
            eventItemClick : function(o) {
                this.selectedEventItem = o.val;
                this.activeId = o.val.id;
            },
            updateCurrent: function(o){
                this.current = moment(this.current).add(o, 'days').format('YYYY-MM-DD');
                this.$store.dispatch('fetchDaily', this.current);
            },
            showUpdateHandle: function(item) {
                this.showUpdate = true;
                this.currentItem = item;
            },
            updateCancel: function() {
                this.showUpdate = false;
            },
            updateHandle: function(item) {
                this.$store.dispatch('putDaily', item);
                this.showUpdate = false;
            }
        },
        computed: {
            ...mapState({
               eventItems: (state) => {
                    return state.eventItem.all;
               },
               dailyItems: (state) => {
                    return state.eventDaily.current;
               }
            })
        }
    }
</script>
<style lang='scss' scoped>
    .daily__container {
        width:100%;
        height:100vh;
    }
    .daily__current {
        width:100%;
        height:50px;
        padding:0 10px;
    }
    .daily__content {
        height:calc(100vh - 50px);
        width:100%;
        display:flex;
    }
    .panel__container {
        width:200px;
        padding:10px;
        position:relative;
    }
    .event-list__container {
        flex:1;
        display:flex;
        flex-wrap:wrap;
        align-content: flex-start;
    }
</style>
<template>
    <div class='daily__container'>
         <div class='daily__current'>
             {{current}}
         </div>

         <div class='daily__content'>
             <div class='panel__container'>
                 <add-panel @clickHandle='dailySave'></add-panel>
             </div>
             <div class='event-list__container'>
                <event-item v-for='e in eventItems' :item='e' @clickHandle='eventItemClick'></event-item>
             </div>
         </div>

    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import moment from 'moment';
    import addPanel from './add_panel/index.vue';
    import eventItem from './event_item/index.vue';
    export default {
        components:{addPanel, eventItem},
        beforeCreate:function() {
             this.$store.dispatch('fetchEventItemsActive');
        },
        data() {
            return {
                 current: moment().format('YYYY-MM-DD'),
                 selectedEventItem: null
            }
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
            }
        },
        computed: {
            ...mapState({
               eventItems: (state) => {
                    return state.eventItem.all;
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
        line-height:50px;
    }
    .daily__content {
        height:calc(100vh - 50px);
        width:100%;
        display:flex;
    }
    .panel__container {
        width:200px;
        padding:10px;
    }
    .event-list__container {
        flex:1;
        display:flex;
        flex-wrap:wrap;
        align-content: flex-start;
    }
</style>
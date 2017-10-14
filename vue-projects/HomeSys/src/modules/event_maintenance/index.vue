<template>
    <div class='event_maintenance__container'>
        <div class='panel__container'>
            <select-panel @statusChange='statusChange'></select-panel>
            <add-panel :items='eventTypes' v-if='eventTypes && eventTypes.length' @clickHandle='clickHandle'></add-panel>
        </div>
        <div class='item__container'  v-if='eventTypes && eventTypes.length'>
            <div class='col__container col1'>
               <type-group v-for='g in colGroups[0].items' :group='g' @refresh-handle='refreshHandle' ></type-group>
            </div>
            <div class='col__container col2'>
                <type-group v-for='g in colGroups[1].items' :group='g' @refresh-handle='refreshHandle' ></type-group>
            </div>
            <div class='col__container col3'>
                <type-group v-for='g in colGroups[2].items' :group='g' @refresh-handle='refreshHandle' ></type-group>
            </div>

        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import addPanel from './add_panel/index.vue';
    import typeGroup from './type_group/index.vue';
    import selectPanel from './select_panel/index.vue';
    export default {
        components: {addPanel, typeGroup, selectPanel},
        beforeCreate:function() {

        },
        data() {
            return {
                eventStatus: 1
            }
        },
        created() {
            this.$store.dispatch('fetchEventType');
            this.$store.dispatch('fetchEventItems', {status:  this.eventStatus});
        },
        methods: {
            ...mapActions({
                postEventItem: 'postEventItem'
            }),
            clickHandle: function(o) {
                this.postEventItem(o);
            },
            statusChange: function(o) {
                this.eventStatus = o;
                this.$store.commit("setCurrentEventGroupType", o);
                this.$store.dispatch('fetchEventItems', {status: o});
            },
            refreshHandle: function() {
                console.log('refreshsssssssssssssssssssss');
                this.$store.dispatch('fetchEventItems', {status: this.eventStatus});
            }
        },
        computed: {
            ...mapState({
               eventTypes: (state) => {
                    return state.eventType.all;
               },
               eventItems: (state) => {
                    return state.eventItem.current;
               }
            }),
            colGroups: function() {
                var groups = {};
                this.eventItems.forEach((o)=>{
                    groups[o.type] = groups[o.type] || [];
                    groups[o.type].push(o);
                });

                var groupsArr = Object.keys(groups).map((group)=>{
                    return {name: group, items: groups[group]};
                })

                var colGroups = [
                    {name: 'col1', len: 0, items: []},
                    {name: 'col2', len: 0, items: []},
                    {name: 'col3', len: 0, items: []}
                ]
                groupsArr.forEach((o)=>{
                    let min = colGroups.reduce(function (p, v) {
                         return  p.len <= v.len ? p:v;
                    });
                    min.len += o.items.length;
                    min.items.push(o);
                });
                console.log(colGroups);
                return colGroups
            }
        }
    }
</script>
<style lang='scss' scoped>
    .event_maintenance__container {
        width:100%;
        height:100vh;
        position:relative;
        display:flex;
    }
    .panel__container {
        width:200px;
        padding:10px;
    }
    .item__container {
        flex:1;
        display:flex;
    }
    .col__container {
        flex:1;
        padding:10px;
    }
</style>
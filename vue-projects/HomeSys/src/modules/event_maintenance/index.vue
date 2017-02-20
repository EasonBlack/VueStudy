<template>
    <div class='event_maintenance__container'>
        <div class='panel__container'>
            <add-panel :items='eventTypes' v-if='eventTypes && eventTypes.length' @clickHandle='clickHandle'></add-panel>
        </div>
        <div class='item__container'>
            <div class='col__container col1'>
               <type-group v-for='g in colGroups[0].items' :group='g'></type-group>
            </div>
            <div class='col__container col2'>
                <type-group v-for='g in colGroups[1].items' :group='g'></type-group>
            </div>
            <div class='col__container col3'>
                <type-group v-for='g in colGroups[2].items' :group='g'></type-group>
            </div>

        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import addPanel from './add_panel/index.vue';
    import typeGroup from './type_group/index.vue';
    export default {
        components: {addPanel, typeGroup},
        beforeCreate:function() {
             this.$store.dispatch('fetchEventType');
             this.$store.dispatch('fetchEventItemsActive');
        },
        data() {
            return {}
        },
        methods: {
            ...mapActions({
                postEventItem: 'postEventItem'
            }),
            clickHandle: function(o) {
                this.postEventItem(o);
            }
        },
        computed: {
            ...mapState({
               eventTypes: (state) => {
                    return state.eventType.all;
               },
               eventItems: (state) => {
                    return state.eventItem.all;
               }
            }),
            colGroups: function() {
                var groups = {};
                this.eventItems.forEach((o)=>{
                    groups[o.type] = groups[o.type] || [];
                    groups[o.type].push(o);
                });

                var groupsArr =  Object.keys(groups).map((group)=>{
                    return groups[group];
                })

                var colGroups = [
                    {name: 'col1', len: 0, items:[]},
                    {name: 'col2', len: 0, items:[]},
                    {name: 'col3', len: 0, items: []}
                ]
                groupsArr.forEach((o)=>{
                    let min = colGroups.reduce(function (p, v) {
                         return ( p.len <= v.len ? p.len : v.len );
                    });
                    let current = colGroups.find(o=> {
                        return o.len == min
                    })
                    current.len += o.length;
                    current.items.push(o);
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
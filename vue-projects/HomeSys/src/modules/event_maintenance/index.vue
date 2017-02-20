<template>
    <div>
        <add-panel :items='eventTypes' v-if='eventTypes && eventTypes.length'></add-panel>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import addPanel from './add_panel/index.vue';
    export default {
        components: {addPanel},
        beforeCreate:function() {
             this.$store.dispatch('fetchEventType');
        },
        data() {
            return {}
        },
        computed: {
            ...mapState({
               eventTypes: (state) => {
                    return state.eventType.all;
                }
            })
        }
    }
</script>
<style lang='scss' scoped>
</style>
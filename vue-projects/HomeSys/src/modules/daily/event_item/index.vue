<template>
    <div class='event-item__container'>
        <div
        class='event-item__wrapper'
        :style="{
            backgroundColor: colors[item.type-1]
         }"
         v-bind:class="{
            active: activeId == item.id
         }"
        @click='clickHandle(item)'
        @mouseup.prevent.stop = 'mouseUpHandle($event)'
        @contextmenu = 'contextmenuHandle($event)'
        >
            {{item.name}}
        </div>
        <event-status v-if='menuActive' @menuCloseHandle='menuCloseHandle' @closeEventItem='closeEventItem'></event-status>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import eventStatus from './event_status.vue'
    export default {
        components: {eventStatus},
        props:['item', 'activeId'],
        data() {
            return {
               colors: ['#CF6066','#27727B','#FCCE10','#E87C25','#B5C334','#143042', '#FFC7C7', '#97866E', '#1DB496','#B4597E', '#137510'],
               menuActive: false
            }
        },
        methods: {
            clickHandle: function(item) {
                this.$emit('clickHandle', {val: item});
            },
            mouseUpHandle: function(e) {
                if (e.button==2) {
                    this.menuActive = true;
                }
            },
            contextmenuHandle: function(e) {
                 e.preventDefault();
            },
            menuCloseHandle : function() {
                this.menuActive= false;
            },
            closeEventItem: function() {
                let id = this.item.id;
                this.$store.dispatch('closeEventItem', id);
                this.menuActive= false;
            }
        },

    }
</script>
<style lang='scss' scoped>
    .event-item__container {
        max-width:20%;
        min-width:20%;
        padding:0 10px;
        margin-bottom:10px;
        position:relative;
        .event-item__wrapper {
            height:30px;
            line-height:30px;
            padding-left:20px;
            color:white;
            box-sizing:border-box;
            overflow:hidden;
            &.active {
                 border: 2px solid steelblue;
            }
        }

    }
</style>
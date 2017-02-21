<template>
    <div class='type-group__container'>
        <div class='type-group__title'>{{groupName}}</div>
        <ul>
            <li v-for='item in group.items'>
                {{item.name}}
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
        computed: {
           ...mapState({
             eventTypes: (state) => {
                  return state.eventType.all;
             }
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
    }
</style>
<template>
    <div class='main__container'>
        <select-active :orgs='orgs' :results='results' :index='index' v-if='results[index].active'></select-active>
        <select-result :orgs='orgs' :results='results' :index='index' v-if='!results[index].active'></select-result>
    </div>
</template>

<script>
    import selectActive from './select-active.vue'
    import selectResult from './select-result.vue'
    export default{
        components: {selectActive, selectResult},
        props: ['orgs', 'results', 'index'],
        data(){
            return{

            }
        },
        methods: {
            orgSelected() {

            }
        }
    }
</script>

<style lang='scss' scoped>

</style>

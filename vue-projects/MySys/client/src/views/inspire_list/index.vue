<template>
    <div>
        <div class='action-wrapper'>
            
        </div>
        <div class='section-wrapper'>
            <inspire-item v-for='item in items' :item='item' :key='item.ID' />
           
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import inspireItem from './inspire-item.vue';
    import {ApiInspire} from '$api/index';
    export default {
        components: {inspireItem},
        data() {
            return {
                items: [],
                item: {
                    NAME: 'asd',
                    ID: "12"
                }
            }
        },
        created() {
            ApiInspire.GetInspire()
            .then(o=>{
                this.items = o.data;
            })
        },
        computed: {
			
		}
    }
</script>
<style lang='scss' scoped>
</style>
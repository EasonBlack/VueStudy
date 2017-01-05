<template>
    <div class='main__container'>
        <div class='nav__container'>
            <router-link to='/index'>Manage Visitor</router-link>
        </div>
        <app-table :columns='columns' :rows='sites'
                   :title="'Sites'"
                   :addactive="addActive"
                   v-on:toggleAddPanel = "toggleAddPanel"
        >
            <add-panel
                    slot="addpanel"
                    v-on:closeHandle="toggleAddPanel"
                    v-on:confirmHandle="confirmHandle"
            ></add-panel>
        </app-table>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    import appTable from '../../common/table/index.vue';
    import addPanel from './add_panel.vue';
    export default{
        components: {appTable, addPanel},
        beforeCreate:function() {
             if(!this.$store.state.visitors.length) {
                this.$store.dispatch('fetchSites');
            }
        },
        data() {
			return {
			    addActive: false,
                columns: [
                    {id:'id', name: 'ID'},
                    {id:'name', name: 'Name'}
                ]
			}
		},
		methods: {
		    ...mapActions({
                postSites: 'postSites'
            }),
		    confirmHandle: function(req) {
                this.postSites(req);
                this.addActive = false;
		    },
		    toggleAddPanel: function({flag}) {
                this.addActive = flag;
		    }
		},
		computed:{
            ...mapState({
                sites: (state) => {
                    return state.sites.all;
                }
            })
        },
    }
</script>


<style lang='scss' scoped>
    .main__container {
        width:50%;
        margin-top:100px;
        height:600px;
        margin-left:auto;
        margin-right:auto;
        background-color:grey;
    }
    .nav__container {
        height:40px;
        line-height:40px;
        padding: 0 10px;
    }
</style>
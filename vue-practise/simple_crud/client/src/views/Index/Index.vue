<template>
    <div class='main__container'>
        <div class='nav__container'>
            <router-link to='/site'>Manage Site</router-link>
        </div>
        <app-table :columns='columns' :rows='visitors' :addactive="addActive"
                    v-on:toggleAddPanel = "toggleAddPanel"
                    v-on:editHandle = "editHandle"
                     :title="'Visitor'"
        >
            <add-panel
                       slot="addpanel"
                       :sites = "sites"
                       :currentId = "currentId"
                       :currentName="currentName"
                       :currentSites = "currentSites"
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
                this.$store.dispatch('fetchVisitors');
            }
            if(!this.$store.state.sites.length) {
                this.$store.dispatch('fetchSites');
            }
        },
        data() {
			return {
			    addActive: false,
			    currentName: '',
			    currentSites: [],
			    currentId: '',
                columns: [
                    {id:'id', name: 'ID'},
                    {id:'name', name: 'Name'},
                    {id:'auth', name: 'Auth'}
                ]
			}
		},
		methods: {
		    ...mapActions({
                postVisitors: 'postVisitors'
            }),
		    confirmHandle: function(req) {
		        console.log(req);
                this.postVisitors(req);
                this.addActive = false;

		    },
		    toggleAddPanel: function({flag}) {
                this.addActive = flag;
                if(flag) {
                    this.currentId = '';
                    this.currentName = '';
                    this.currentSites = [];
                }
		    },
		    editHandle: function(item) {
		        this.currentId = item.id;
                this.currentName = item.name;
                this.currentSites = item.auth;
                this.addActive = true;
                console.log(this.currentId);
		    }
		},
		computed:{
            ...mapState({
                visitors: (state) => {
                    return state.visitors.all;
                },
                sites: (state)=> {
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

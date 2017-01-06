<template>
    <div class='main__container'>
        <div class='nav__container'>
            <router-link to='/index'>Manage Visitor</router-link>
        </div>
        <app-table :columns='columns' :rows='sites'
                   :title="'Sites'"
                   :addactive="addActive"
                   v-on:toggleAddPanel = "toggleAddPanel"
                   v-on:editHandle = "editHandle"
                   v-on:deleteHandle = "deleteHandle"
        >
            <add-panel
                    slot="addpanel"
                    :currentItem = "currentItem"
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
			    currentItem: {
			        id: '',
			        name: '',
			        image: ''
			    },
                columns: [
                    {id:'id', name: 'ID'},
                    {id:'name', name: 'Name'},
                    {id:'image', name: 'Image'}
                ]
			}
		},
		methods: {
		    ...mapActions({
                postSites: 'postSites',
                deleteSites: 'deleteSites'
            }),
		    confirmHandle: function(req) {
                this.postSites(req);
                this.addActive = false;
		    },
		    toggleAddPanel: function({flag}) {
                this.addActive = flag;
                if(flag) {
                    this.currentItem = {};
                }
		    },
		    editHandle: function(item) {
		        this.currentItem = item;
                this.addActive = true;
		    },
		    deleteHandle: function(item) {
		         this.deleteSites({id: item.id});
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
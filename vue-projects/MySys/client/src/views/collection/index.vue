<template>
    <div class='d-flex flex-column pt-10'>
        
        <div class='action-wrapper'>
            <multi-selects :items='categoryItems'  @selectChange='selectCategoryChange' v-if='categoryItems.length'/>
            <button class='btn btn-primary mr-10' @click='toggleNewCollectionDisplay'>New</button>
           
        </div>
        <div class='action-wrapper'>
            <input class='form-control search-txt mr-10' v-model='currentSearch' />
            <button class='btn btn-primary mr-10' @click='search'>Search</button>
            <button class='btn btn-primary' @click='random'>Random</button>
            <!-- <button class='btn btn-primary' @click='test'>test</button> -->
        </div>
       
        <div class='section-wrapper'>
            <div class='content-wrapper'>
                <div class='container-fluid'>
                    <div class='row' v-if='collectionItems.length'>          
                        <div class='col-6' >
                            <div class=' collection-wrapper'  v-for='item in collectionEvens'   :key='item.ID'>
                                <collection-card :item='item' @edit='edit' @show='show'/>
                            </div>           
                        </div>  
                         <div class='col-6'>
                             <div class=' collection-wrapper'  v-for='item in collectionOdds'   :key='item.ID'>
                                <collection-card :item='item' @edit='edit' @show='show'/>
                            </div> 
                        </div>  
                    </div>
                </div>
            </div>
            <div class='edit-wrapper noisy' :class='{active: newCollectionDisplay}'>
                <div class='textarea-wrapper'>
                    <my-text-area v-model='content' />
                </div>
                 <div class='action-wrapper'>
                    <button class='btn btn-primary mr-10' @click='save' v-if='!currentId'>Save</button>
                    <button class='btn btn-danger mr-10' @click='editSave' v-else-if='currentId'>Edit</button>
                    <button class='btn btn-primary' @click='cancel'>Cancel</button>
                </div>
            </div>
            <big-content :content='content' v-if='showCollectionDisplay'  @close='closeShowCollection'/>
        </div>
       
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import myTextArea from '$commoncomponents/myTextArea.vue';
    import collectionCard from '$commoncomponents/card.vue';
    import multiSelects from '$commoncomponents/selects.vue';
    import bigContent from './content.vue';
    export default {
        components: { collectionCard, myTextArea, multiSelects, bigContent },
        data() {
            return {
                currentCategory: {},
                collectionItems: [],

                currentId: '',
                currentKeys: '',
                content: '',
                currentSearch: '',
                

                newCollectionDisplay: false,
                showCollectionDisplay: false
            }
        },
        created() {
            if(!this.categoryItems.length) {
                this.$store.dispatch('getCategory');
            }
        },
        methods: {
            selectCategoryChange(item) {
                this.currentCategory = item;
            },
            search() {       
                let cids = this.getCategoryChild(this.categoryOriginItems, this.currentCategory.ID) ;      
                this.$store.dispatch('getCollection', {
                    category: cids.join(','), //this.currentCategory.ID,
                    search: this.currentSearch,
                }).then(result => {
                    this.collectionItems = result.data;
                })
            },
            random() {
                 this.$store.dispatch('getRandomCollection')
                 .then(result => {
                    this.collectionItems = result.data;
                })
            },
            test() {
                this.$store.dispatch('patchCollectionTimes', {id: 2})
                .then(result => {
                    console.log(result);
                })
            },
            getCategoryChild(items, id) {
                let _result = [id];
                let res = items.filter(item=>item.PARENT_ID==id);
                res.forEach(r=>{
                    let childIds = []
                    childIds = [...this.getCategoryChild(items, r.ID)]
                    _result.push(...childIds);
                })
                return _result;
            },
           
            toggleNewCollectionDisplay() {
                this.newCollectionDisplay = !this.newCollectionDisplay;
            },

            edit(item) {
                this.newCollectionDisplay = true;
                this.currentId = item.ID;
                this.content = item.CONTENT;
            },
            show(item) {
                this.showCollectionDisplay = true;
                this.content = item.CONTENT;
            },
            closeShowCollection() {
                this.showCollectionDisplay = false;
                this.content = '';
            },
            save() {
                this.preSave()
                .then(collection=>{
                    this.saveCollection(collection);
                })
            },
            async preSave(callback) { 
                
                let _content = this.content.replace(/\\/g,'\\\\');
                _content = _content.replace(/\'/g,'\\\'');
                _content = _content.replace(/\%/g,'\\\%');

                return {
                    id: this.currentId,
                    content: _content, 
                    category: this.currentCategory.ID
                }
             
            },
            editSave() {
                this.preSave()
                .then(collection=>{
                    this.modifyCollection(collection);
                })
               
            },
            saveCollection(collection) {
                this.$store.dispatch("postCollection", collection)
                .then(o=>{
                    alert('Finish');
                    this.cancel();
                })
            },

            modifyCollection(collection) {
                this.$store.dispatch("putCollection", collection)
                .then(o=>{
                    alert('Finish');
                    this.cancel();
                })
            },

            cancel() {
                this.newCollectionDisplay = false;
                this.clearInput();
            },
            clearInput() {
                this.currentId = null;
                this.content = null;
            }
        },
        computed: {
            ...mapState({
                categoryItems: (state) => state.category.items,
                categoryOriginItems: (state) => state.category.originItems
            }),
            collectionEvens() {
                return this.collectionItems.filter((item,index)=>{
                   return !(index % 2);
               })
            },
            collectionOdds() {
                return this.collectionItems.filter((item,index)=>{
                   return index % 2;
               })
            }
		}
    }
</script>
<style lang='scss' scoped>
    .content-wrapper {
        width:100%;
        height:100%;
        overflow-x:hidden;
        overflow-y: auto;
    }

    .edit-wrapper {
        position:absolute;
        top:0px;
        right: -50%;
        width: 50%;
        height:100%;
        background-color: steelblue;
        border-left: 1px solid white;
        transition: right 0.5s;
        &.active {
            right: 0;
        }
    }

    .section-wrapper {
        flex:1;
        position:relative;
        overflow: hidden;
    }

    .collection-wrapper {
        display:flex;
        padding-left:0px;
        margin-bottom:10px;
    }

    .el-select {
        width:200px;
    }

    .search-txt {
        width: 200px !important;
    }

</style>

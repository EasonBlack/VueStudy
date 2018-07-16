<template>
    <div class='d-flex flex-column pt-10'>
        
        <div class='action-wrapper'>
            <el-select
                class='el-select mr-10'
                v-model="currentCategory"
                allow-create
                default-first-option
                placeholder="Category">
                <el-option
                    v-for="item in categoryItems"
                    :key="item.ID"
                    :label="item.NAME"
                    :value="item.ID">
                </el-option>
            </el-select>
            <button class='btn btn-primary' @click='toggleNewCollectionDisplay'>New</button>
        </div>
        <div class='action-wrapper'>
            <el-select
                class='el-select mr-10'
                v-model="currentKeys"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="Keys">
                <el-option
                    v-for="item in keyItems"
                    :key="item.ID"
                    :label="item.NAME"
                    :value="item.ID">
                </el-option>
            </el-select>
            <input class='form-control d-inline-block search-txt mr-10' placeholder='Search' v-model='currentSearch' />
            <button class='btn btn-primary' @click='search'>Confirm</button>
        </div>
        <div class='section-wrapper'>
            <div class='content-wrapper'>
                <div class='container-fluid'>
                    <div class='row'>          
                        <div class='col-6 collection-wrapper'  v-for='item in collectionItems'  v-if='collectionItems.length' :key='item.ID'>
                            <collection-card :item='item' @edit='edit'/>
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
        </div>
       
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import myTextArea from '$commoncomponents/myTextArea.vue';
    import collectionCard from './card.vue';
    export default {
        components: { collectionCard, myTextArea },
        data() {
            return {
                currentCategory: '',
                currentId: '',
                currentKeys: '',
                content: '',
                currentSearch: '',
                collectionItems: [],
                
                getCategoryStr: '',
                getkeyStr: '',
                getCollectionStr: '',
                postCollectionStr: '',
                postKeyStr: '',
                putCollectionStr: '',

                newCollectionDisplay: false,
            }
        },
        created() {
            if(!this.categoryItems.length) {
                this.$store.dispatch(this.getCategoryStr);
            }
            if(!this.keyItems.length) {
                this.$store.dispatch(this.getkeyStr);
            }
        },
        methods: {
            search() {
                this.$store.dispatch(this.getCollectionStr, {
                    category: this.currentCategory,
                    key: this.currentKeys.join(','),
                    search: this.currentSearch,
                }).then(result => {
                    this.collectionItems = result.data;
                })
            },
            toggleNewCollectionDisplay() {
                this.newCollectionDisplay = !this.newCollectionDisplay;
            },
            edit(item) {
                 this.newCollectionDisplay = true;
                 this.currentId = item.ID;
                 this.content = item.CONTENT;
            },
            save() {
                this.preSave()
                .then(collection=>{
                    this.saveCollection(collection);
                })
            },
            async preSave(callback) {
                if(!this.currentKeys.length) return ;

                let _currentKeys = this.currentKeys.filter(o=>isNaN(o));
                let _keyItemNames = this.keyItems.map(o=> o.NAME);
                let newItems = _currentKeys.filter((v)=>{ 
                    return _keyItemNames.indexOf(v) === -1 
                })
           
                if(newItems.length) {
                    await this.$store.dispatch(this.postKeyStr, {items: newItems})
                    let _orginKeys = this.currentKeys.filter(o=>!isNaN(o)) 
                    this.currentKeys = _orginKeys.concat(this.keyItems.filter(o=>newItems.indexOf(o.NAME)!=-1).map(o=>o.ID));
                } 

                
                let _content = this.content.replace(/\\/g,'\\\\');
                _content = _content.replace(/\'/g,'\\\'');
                _content = _content.replace(/\%/g,'\\\%');

                return {
                    id: this.currentId,
                    content: _content, 
                    keys: this.currentKeys.join(','),
                    category: this.currentCategory
                }
             
            },
            editSave() {
                this.preSave()
                .then(collection=>{
                    this.modifyCollection(collection);
                })
               
            },
            saveCollection(collection) {
                this.$store.dispatch(this.postCollectionStr, collection)
                .then(o=>{
                    console.log(collection);
                    console.log(o);
                    alert('Finish');
                    this.cancel();
                })
            },
            modifyCollection(collection) {
                this.$store.dispatch(this.putCollectionStr, collection)
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
            // categoryItems
            // keyItems
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
        width:30%;
    }

    .search-txt {
        width: auto !important;
    }

</style>

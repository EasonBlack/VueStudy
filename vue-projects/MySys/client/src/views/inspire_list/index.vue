
<template>
    <div class='d-flex flex-column pt-10'>
        
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
            <button class='btn btn-primary  mr-10' @click='search'>Confirm</button>
            <button class='btn btn-primary' @click='toggleNewInspireDisplay'>New</button>
        </div>
        <div class='section-wrapper'>
            <div class='content-wrapper'>
                <div class='container-fluid'>
                    <div class='row'>          
                        <div class='col-6 collection-wrapper'  v-for='item in inspireItems'  v-if='inspireItems.length' :key='item.ID'>
                            <inspire-card :item='item' @edit='edit'/>
                        </div>  
                    </div>
                </div>
            </div>
            <div class='edit-wrapper noisy' :class='{active: newInspireDisplay}'>
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
    import inspireCard from '$commoncomponents/card.vue';
    export default {
        components: { inspireCard, myTextArea },
        data() {
            return {
            
                currentId: '',
                currentKeys: '',
                content: '',
                currentSearch: '',
                inspireItems: [],
                keyItems: [],

                newInspireDisplay: false,
            }
        },
        created() {
            this.$store.dispatch("getInspireKey")
            .then(res=>{
                this.keyItems = res.data;
            })
            // if(!this.keyItems.length) {
            //     this.$store.dispatch("getLitItems");
            // }
        },
        methods: {
            search() {
                this.$store.dispatch("getInspire", {
                    key: this.currentKeys.join(','),
                    search: this.currentSearch,
                }).then(result => {
                    this.inspireItems = result.data;
                })
            },
            toggleNewInspireDisplay() {
                this.newInspireDisplay = !this.newInspireDisplay;
            },
            edit(item) {
                 this.newInspireDisplay = true;
                 this.currentId = item.ID;
                 this.content = item.CONTENT;
            },
            save() {
                this.preSave()
                .then(inspire=>{
                    this.saveInspire(inspire);
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

                    let keyItemsResult = await this.$store.dispatch("postInspireKey", {items: newItems});
                    this.keyItems = keyItemsResult.data;
                    let _orginKeys = this.currentKeys.filter(o=>!isNaN(o)) 
                    this.currentKeys = _orginKeys.concat(this.keyItems.filter(o=>newItems.indexOf(o.NAME)!=-1).map(o=>o.ID));
                } 

                
                let _content = this.content.replace(/\\/g,'\\\\');
                _content = _content.replace(/\'/g,'\\\'');
                _content = _content.replace(/\%/g,'\\\%');

                return {
                    id: this.currentId,
                    content: _content, 
                    keys: this.currentKeys.join(',')
                }
             
            },
            editSave() {
                this.preSave()
                .then(inspire=>{
                    this.modifyInspire(inspire);
                })
               
            },
            saveInspire(obj) {
                this.$store.dispatch("postInspire", obj)
                .then(o=>{
                    alert('Finish');
                    this.cancel();
                })
            },
            modifyInspire(obj) {
                this.$store.dispatch("putInspire", obj)
                .then(o=>{
                    alert('Finish');
                    this.cancel();
                })
            },


            cancel() {
                this.newInspireDisplay = false;
                this.clearInput();
            },
            clearInput() {
                this.currentId = null;
                this.content = null;
            }
        },
        computed: {
            // ...mapState({
            //     keyItems : (state) => state.key.litItems
            // })
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

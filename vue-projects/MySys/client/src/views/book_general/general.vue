<template>
    <div class='d-flex flex-wrap position-relative h-100'>
        <div  class='flex-1'>
            <general-info  :item='book' v-if='book' />  
        </div>
        <div class='flex-1 pt-10 pl-10'>
            <div class='mb-10'>
                <button class='btn btn-primary btn-sm' @click='toggleNewDisplay'>New</button>
            </div>
            <template v-if='charactors.length'>
                <div class='charactor-card mb-10' v-for='charactor in charactors' :key='charactor.ID'>
                    {{charactor.NAME}}
                    <button class='btn btn-danger btn-sm btn-edit' @click='edit(charactor)'>Edit</button>
                </div>
            </template>
        </div>
        <div class='flex-1'>
        </div>

         <div class='edit-wrapper pt-40 noisy' :class='{active: newEditDisplay}'>
            <div class='input-wrapper'>
                <input class='form-control' v-model='newName' />
            </div>
                <div class='action-wrapper'>
                <button class='btn btn-primary mr-10' @click='save' v-if='!newEditId'>Save</button>
                <button class='btn btn-danger mr-10' @click='editSave' v-else-if='newEditId'>Edit</button>
                <button class='btn btn-primary' @click='cancel'>Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import generalInfo from './general-info.vue';
    export default { 
        components: { generalInfo },
        data() {
            return {
                book: null,
                charactors:[],

                newEditDisplay: false,
                newName: '',
                newEditId: '',

            }
        },
        created() {
             Promise.all([
                 this.$store.dispatch('getBookById', this.bookId),
                 this.$store.dispatch('getBookCharactors', this.bookId)
             ])
             .then(res => {
                 this.book = res[0].data[0];
                 this.charactors = res[1].data;
             })
        },
        methods: {
            toggleNewDisplay() {
                this.newEditDisplay = !this.newEditDisplay;
            },
            cancel() {
                this.newEditDisplay = false;
            },
            edit(item) {
                this.newEditDisplay = true;
                this.newEditId = item.ID;
                this.newName = item.NAME;
            },
            save() {
                 this.$store.dispatch('postAndGetBookCharactors', {
                     id: this.bookId,
                     name: this.newName,
                     desc: '',
                     relationship: ''
                 })
                 .then(res=>{        
                     this.charactors = res.data;
                     this.cancel();
                 })
            },
            editSave() {
                this.$store.dispatch('putAndGetBookCharactors', {
                     bookId: this.bookId,
                     id: this.newEditId,
                     name: this.newName,
                     desc: '',
                     relationship: ''
                 })
                 .then(res=>{
                     this.charactors = res.data;
                     this.cancel();
                 })
            }
            
        },
        computed: {
			...mapState({
                bookId: (state) => state.route.params.id
            })
		}
    }
</script>
<style lang='scss' scoped>
   

    
    .btn-edit {
        position:absolute;
        top: 7px;
        right:15px;
    }
</style>
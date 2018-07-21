<template>
    <div class='d-flex flex-wrap position-relative h-100'>
        <div class='flex-1 pt-10 pl-10 border-right'>
            <div class='charactor-card mb-10 ' v-for='charactor in charactors' :key='charactor.ID'
                :class='{active: charactor.ID == selectedCharactor}'
                @click='charactorSelect(charactor)'
            >
                {{charactor.NAME}}
            </div>
        </div>
        <div class='flex-1 pt-10 pl-10 pr-10 border-right'>
            <div class='action-wrapper pl-0' v-if='selectedCharactor'>
                <button class='btn btn-primary btn-sm' @click='newContentHandle'>New</button>
            </div>
            <div class='content-card mb-10' v-for='content in contents' :key='content.ID'
                :class='{active: content.ID == selectedContent}'
                @click='contentSelect(content)'
            >
                {{content.NAME}}
                <button class='btn btn-danger btn-sm btn-edit' @click.prevent.stop='toggleEditDisplay(content)'>Edit</button>
            </div>
        </div>
        <div class='flex-1 pt-10 pl-10 pr-10'>
            <div class='action-wrapper pl-0 content-title'>
                {{selectedContent.NAME}}
            </div>
            <pre class='content-detail'>{{selectedContent.CONTENT}}
            </pre>
        </div>
        <div class='edit-wrapper noisy' :class='{active: newContentDisplay}'>
            <div class='input-wrapper' v-if='!selectedContent' >
                <input class='form-control' v-model='newName' placeholder='NAME' />    
            </div>
            <div class='textarea-wrapper' v-if='selectedContent'>
                 <my-text-area v-model='newContent' />
            </div>
            <div class='action-wrapper'>
                <button class='btn btn-primary mr-10' @click='saveNewCharactor'>Save</button>
                <button class='btn btn-primary' @click='cancel'>Cancel</button>
            </div>
        </div>
       
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import myTextArea from '$commoncomponents/myTextArea.vue';
    export default {
        components: { myTextArea },
        data() {
            return {
                selectedCharactor: '',
                selectedContent: '',
                newContentDisplay: false,

                newName: '',
                newContent: '',            
              
                charactors:[],
                contents: []
            }
        },
        created() {
            Promise.all([
                this.$store.dispatch('getBookCharactors', this.bookId)
            ])
            .then(res => {
                this.charactors = res[0].data;
            })
        },
        methods: {
            charactorSelect(item) {
                this.selectedCharactor = item.ID;
                this.$store.dispatch('getCharactorContentByCId',item.ID)
                .then(res=>{
                    this.contents = res.data;
                })
            },
            contentSelect(content) {
                this.selectedContent = content;     
            },
            newContentHandle() {
                this.selectedContent = '';
                this.newContentDisplay = !this.newContentDisplay;
            },
            toggleEditDisplay(content) {
                this.newContentDisplay = !this.newContentDisplay;
                this.newContent = content.CONTENT;
            },
            saveNewCharactor() {

                let currentHandle = '';
                if(this.selectedContent) {
                    currentHandle = this.$store.dispatch('putAndGetCharactorContent',{
                        cid: this.selectedCharactor,
                        id : this.selectedContent.ID,
                        name: this.selectedContent.NAME,
                        content: this.newContent
                    });
                } else {
                    currentHandle =  this.$store.dispatch('postAndGetCharactorContent',{
                        id: this.selectedCharactor,
                        name: this.newName,
                        content: ''
                    });                    
                }
                currentHandle
                .then(res=>{
                    if(this.selectedContent) {
                        this.selectedContent = res.detail;
                        this.contents = res.list;
                        this.$forceUpdate();
                    } else {
                        this.contents = res.data;
                    }
                   
                    this.cancel() ;
                    alert('Finish');
                })
            },
            cancel() {
                this.newContentDisplay = false;
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
    .charactor-card {
        &:hover  {
            background-color: #90b8Da;
        }
        &.active {
            background-color: #5654BF;
        }
       
    }
    .content-card {
        position:relative;
        &:hover  {
            .btn-edit {
                display:block;
            }
        }
    }

    
    
    .btn-edit {
        display:none;
        position:absolute;
        top: 7px;
        right:15px;
    }

    .content-card {
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        color: #ccc;
        background-color: rgba(#174A75, 0.3);
        &.active {
            background-color: #5654BF;
        }
    }

    .content-title {
        font-size: 17px;
        font-weight: bold;
        color:white;
    }
    .content-detail {
        color: #ccc;
        font-size:14px;
    }
    

    .edit-wrapper {
        position:absolute;
        top:0px;
        right: -34%;
        width: 34%;
        height:100%;
        background-color: steelblue;
        //border-left: 1px solid white;
        transition: right 0.5s;
        &.active {
            right: 0;
        }
    }
    



    .textarea-wrapper {
        height:80%;
    }
</style>

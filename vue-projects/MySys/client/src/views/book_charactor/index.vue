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
            <div class='action-wrapper pl-0' v-if='contents.length'>
                <button class='btn btn-primary btn-sm' @click='newContentHandle'>New</button>
            </div>
            <div class='content-card mb-10' v-for='content in contents' :key='content.ID'
                :class='{active: content.ID == selectedContent}'
                @click='contentSelect(content)'
            >
                {{content.NAME}}
            </div>
        </div>
        <div class='flex-1 pt-10 pl-10 pr-10'>
            <pre>{{currentContent}}
            </pre>
        </div>
        <div class='edit-wrapper noisy' :class='{active: newContentDisplay}'>
            <div class='input-wrapper'>
                <input class='form-control' v-model='newName' placeholder='NAME' v-if='!currentId' />
                <my-text-area v-model='newContent' v-if='currentId'/>
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

                currentId: '',
                currentContent: '',
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
                this.selectedContent = content.ID;
                this.currentContent = content.CONTENT;
            },
            newContentHandle() {
                this.newContentDisplay = !this.newContentDisplay;
            },
            saveNewCharactor() {
                this.$store.dispatch('postAndGetCharactorContent',{
                    id: this.selectedCharactor,
                    name: this.newName,
                    content: ''
                })
                .then(res=>{
                    this.contents = res.data;
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
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        color: #ccc;
        background-color: rgba(#174A75, 0.3);
        &.active {
            background-color: #5654BF;
        }
    }

    .edit-wrapper {
        position:absolute;
        top:0px;
        right: -33.33%;
        width: 33.33%;
        height:100%;
        background-color: steelblue;
        border-left: 1px solid white;
        transition: right 0.5s;
        &.active {
            right: 0;
        }
    }
</style>

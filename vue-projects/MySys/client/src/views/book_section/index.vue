<template>
    <div class='d-flex flex-wrap position-relative h-100'>
        <div class='flex-1 pt-10 pl-10 border-right'>
            <div class='book-section-card mb-10 ' v-for='section in sections' :key='section.ID'
                  @click='sectionSelect(section)'
            >
                {{section.NAME}}
            </div>
        </div>
         <div class='flex-2 pt-10 pl-10 pr-10 d-flex flex-wrap  position-relative'>
             <div class='container-fluid'>
                    <div class='row'>          
                        <div class='col-6 collection-wrapper mb-10'  v-for='content in contents' :key='content.ID'>
                           <simple-card :content='content.CONTENT' />
                        </div>  
                    </div>
                    <div class='row'>
                        <div class='col-12'>
                            <button class='btn btn-primary' @click='editContentDisplayHandle'>New</button>
                        </div>
                    </div>
            </div>
            
            <div class='edit-wrapper noisy' :class='{active: isEditContentDisplay}'>
                <div class='textarea-wrapper'>
                    <my-text-area v-model='editContent' />
                </div>
                 <div class='action-wrapper'>
                    <button class='btn btn-primary mr-10' @click='save'>Save</button>
                    <!-- <button class='btn btn-danger mr-10' @click='editSave' v-else-if='currentId'>Edit</button> -->
                    <button class='btn btn-primary' @click='cancel'>Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { ApiBookSection } from '$api/index';
    import {mapState} from 'vuex';
    import simpleCard from '$commoncomponents/simple-card.vue';
    import myTextArea from '$commoncomponents/myTextArea.vue';
    export default {
        components: {simpleCard, myTextArea},
        data() {
            return {
                sections: [],
                contents: [],
                editContent: '',
                selectedSection: {},

                isEditContentDisplay : false
            }
        },
        created() {
            this.getSection({bookId: this.bookId});
        },
        methods: {
            getSection(obj) {
                ApiBookSection.GetSectionByBook(obj)
                .then(r=>{
                    this.sections = r.data;     
                })
            },

            sectionSelect(section) {
                this.selectedSection = section;
                ApiBookSection.GetContentBySection({sectionId: section.ID})
                 .then(r=>{
                     this.contents = r.data;
                 })
            },



            editContentDisplayHandle() {
                this.isEditContentDisplay = !this.isEditContentDisplay;
            },

            async preSave() { 
                
                let _content = this.editContent.replace(/\\/g,'\\\\');
                _content = _content.replace(/\'/g,'\\\'');
                _content = _content.replace(/\%/g,'\\\%');

                return {
                    sectionId: this.selectedSection.ID,
                    content: _content,
                }
             
            },

            save() {
                this.preSave()
                .then(section=>{
                    this.$store.dispatch("postContentBySection", section)
                    .then(o=>{
                        this.contents = o.data;
                        alert('Finish');
                        this.cancel();
                    })
                })
            },
            editSave() {},
            cancel() {
                 this.isEditContentDisplay  = false;
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
</style>
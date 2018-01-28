<template>
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-4 pt-30'>
                <a class='btn btn-primary d-block text-center font-weight-bold text-white' 
                    @click='toggleEdit'>
                    <span v-if="!isEidt">Edit Story</span>
                    <span v-else>Back List</span>
                </a>
                <div class='board mt-10'>
                    <story-list  class='front' :class='{rotate: isEidt}' />
                    <story-edit  class='back'  :class='{rotate: isEidt}'  />
                </div>      
            </div>
            <transition name="opacity-display">
                <div class='col-4 pt-30' v-if='charactorDisplay && storyDetail.name'>
                    <a class='btn btn-primary d-block text-center font-weight-bold text-white' 
                        @click='toggleCharactorEdit'>
                        <span>{{storyDetail.name}}</span>
                    </a>
                    <div class='board mt-10'>
                        <charactor-list  class='front'  :class='{rotate: isCharactorEdit}'  />
                        <charactor-edit class='back'   :class='{rotate: isCharactorEdit}' />
                    </div>
                </div>
            </transition>
            <transition name="opacity-display">
                <div class='col-4 pt-30' v-if='charactorDisplay && storyDetail.name'>
                    <a class='btn btn-primary d-block text-center font-weight-bold text-white' 
                        @click='toggleCharactorEdit'>
                        <span>{{storyDetail.name}}</span>
                    </a>
                    <div class='board mt-10'>
                       
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import storyList from './story/storyList.vue';
    import storyEdit from './story/storyEdit.vue';
    import charactorList from './charactor/list.vue';
    import charactorEdit from './charactor/edit.vue';
    export default {
        components: {
            storyList,
            storyEdit,
            charactorList,
            charactorEdit
        },
        
        data() {
            return {
               
            }
        },
        created() {
            this.$store.dispatch("getAllBooks")
            .then(()=>{})
        },
        methods: {
            toggleEdit() {
                this.$store.commit('getBookById', {});
                this.$store.commit("toggleBookEdit")
            },
            toggleCharactorEdit() {
                this.$store.commit('getCharactorById', {});
                this.$store.commit("toggleCharactorEdit")
            }
        },
        computed: {
            ...mapState({
                isEidt: (state) => state.book.isEdit,
                isCharactorEdit: (state) => state.charactor.isEdit,
                charactorDisplay: (state) => state.charactor.charactorDisplay,
                storyDetail: (state)=>state.book.detail
            })
        }
        
    }
</script>
<style lang='scss' scoped>
    .board {
        position:relative;
        width:100%;
        height:400px;
        perspective: 500px;
        
    }
    .board > div {
        border:1px solid steelblue;
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        transform-style: preserve-3d;
        transition: all 0.3s;
    }
    .front {
        background-color: lightblue;
        transform: rotateY(0deg);
        z-index:10;
        overflow-y:auto;
    }
    .front.rotate {
        opacity : 0;
        transform: rotateY(-180deg);
        z-index:1;
    }
    .back {
        background-color: rgba(#ccc, 0.3);
        transform: rotateY(180deg);
        opacity : 0;
        z-index:1;
    }
    .back.rotate {
        opacity : 1;
        transform: rotateY(0deg);
        z-index:10;
    }

    .charactor-display-enter-active, .charactor-display-leave-active {
        transition: opacity .5s
    }
    .charactor-display-enter, .charactor-display-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0
    }

</style>
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
            <div class='col-4'>bb</div>
            <div class='col-4'>cc</div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import storyList from './storyList.vue';
    import storyEdit from './storyEdit.vue';
    export default {
        components: {
            storyList,
            storyEdit
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
            }
        },
        computed: {
            ...mapState({
                isEidt: (state) => state.book.isEdit
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
</style>
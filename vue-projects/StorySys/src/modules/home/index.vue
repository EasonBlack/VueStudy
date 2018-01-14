<template>
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-4 pt-30'>
                <a class='btn btn-primary d-block text-center font-weight-bold text-white' 
                    @click='toggleEdit'>
                    <span v-if="!isBack">Edit Story</span>
                    <span v-else>Back List</span>
                </a>
                <div class='board mt-10'>
                    <story-list  class='front' :class='{rotate: isBack}' />
                    <story-edit  class='back'  :class='{rotate: isBack}' />
                </div>      
            </div>
            <div class='col-4'>bb</div>
            <div class='col-4'>cc</div>
        </div>
    </div>
</template>
<script>
    import storyList from './storyList.vue';
    import storyEdit from './storyEdit.vue';
    export default {
        components: {
            storyList,
            storyEdit
        },
        data() {
            return {
                isBack : false
            }
        },
        methods: {
            toggleEdit() {
                this.isBack = !this.isBack;
            }
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
        background-color: lightgreen;
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
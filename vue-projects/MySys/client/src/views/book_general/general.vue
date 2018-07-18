<template>
    <div class='d-flex flex-wrap'>
        <div class='flex-1'>
            <div class='row-wrapper'>
                <label class='mr-10 font-weight-bold font-14'>Name:</label>
                <label class='font-cc'>{{book.NAME}}</label>
            </div>
            <div  class='row-wrapper'>
                <label class='mr-10 font-weight-bold  font-14'>Status:</label>
                <label class='font-cc'>{{book.STATUS}}</label>
            </div>
            <div  class='row-wrapper'>
                <label class='font-weight-bold  font-14'>Desc:</label>
                <pre  class='font-cc'>{{book.DESC}}</pre>
            </div>
            
        </div>
        <div class='flex-1 pt-10 pl-10'>
            <div class='mb-10'>
                <button class='btn btn-primary btn-sm' >New</button>
            </div>
           
            <div class='charactor-item mb-10' v-for='charactor in charactors' :key='charactor.ID'>
                {{charactor.NAME}}
            </div>
            
        </div>
        <div class='flex-1'>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                book: null,
                charactors:[]
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
        computed: {
			...mapState({
                bookId: (state) => state.route.params.id
            })
		}
    }
</script>
<style lang='scss' scoped>
    .row-wrapper {
        
        padding-left: 20px;
        width:100%;
        label {
            color: white;
            font-size:16px;
            height: 40px;
            line-height:40px;
        }
        .font-cc {
            color: #ccc; 
            text-shadow: -1px 0px #fff, 1px 0px #333;
        }
       
    }

    .charactor-item {
        width: 80%;
        height:40px;
        line-height:40px;
        padding-left:10px;
        font-size:15px;
        color:white;
        background-color: #41bbba;
    }
</style>
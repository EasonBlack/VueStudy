<template>
    <div class='book-list-wrapper'>
        <div class='book-card-wrapper' v-for='book in books' :key='book.ID'>
            <div class='book-card' @click='goto(book.ID)' >{{book.NAME}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                books: []
            }
        },
        created() {
            this.$store.dispatch('getBook')
            .then(result=>{
                this.books = result.data;
            })
        },
        methods: {
            goto(id) {
                this.$router.push(`/book/${id}`);
            }
        }
    }
</script>
<style lang='scss' scoped>
    .book-list-wrapper {
        display:flex;
        width:100%;
        height:100%;
        flex-wrap: wrap;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .book-card-wrapper {
        min-width:25%;
        max-width:25%;
        height: 33.33%;
        display:flex;
        justify-content: center;
        align-items: center;
        
    }
    .book-card {
        font-size:20px;
        width:160px;
        height: 100px;
        color: white;
        padding: 10px;
        background-color: rgba(#8dddbd, 0.4);
        box-shadow: 2px 2px 3px 0px #496887;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
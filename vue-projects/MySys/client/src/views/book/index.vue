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
  

</style>
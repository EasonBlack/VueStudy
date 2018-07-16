<template>
    <div class='book-list-wrapper'>
        <div class='book-card-wrapper' v-for='book in books' :key='book'>
            <div class='book-card'>{{book}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                books: [
                    "a", "b", "c", "d", "e", "f", "gg", "ss", "123", "aaa", "ccc", "ddfdf", 'dfdfde22'
                ]
            }
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
        width:100px;
        height:50px;
        color: white;
        background-color: green;
    }

</style>
<template>
    <div>
        <div>
            <label>NAME:</label>
            <div>{{book.NAME}}</div>
        </div>
        <div>
            <label>DESC:</label>
            <div>{{book.DESC}}</div>
        </div>
        <div>
            <label>Status:</label>
            <div>{{book.STATUS}}</div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        data() {
            return {
                book: null
            }
        },
        created() {
            this.$store.dispatch('getBookById', this.bookId)
            .then(res=> {
                this.book = res.data[0];
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
</style>
<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item d-flex align-items-center" v-for='(row, index) in rows' :key='index'>
                {{row["name"]}} 
                <span v-if='row["author"]'>({{row["author"]}})</span>
                <a class='btn btn-info text-white ml-auto' @click='detail(row)'>Detail</a>
                <a class='btn btn-primary text-white ml-auto' @click='edit(row)'>Edit</a>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        methods: {
            edit(row) {
                this.$store.commit('getBookById', row);
                this.$store.commit('toggleBookEdit')
            },
            detail(row) {
                this.$store.dispatch('getCharactorByBookId', row);
            }
        },
        computed: {
            ...mapState({
                rows:  (state) => state.book.rows
            })
        }
    }
</script>
<style lang='scss' scopde>
</style>
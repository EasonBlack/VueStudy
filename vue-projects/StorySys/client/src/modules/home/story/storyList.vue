<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item d-flex align-items-center" v-for='(row, index) in rows' :key='index'>
                {{row["name"]}} 
                <span v-if='row["author"]'>({{row["author"]}})</span>
                <div class='ml-auto'>
                    <a class='btn btn-info text-white ml-auto' @click='charactor(row)'>Charactor</a>
                    <a class='btn btn-primary text-white ml-auto' @click='edit(row)'>Edit</a>
                </div>
                
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
            charactor(row) {
                this.$store.commit('getBookById', row);
                this.$store.dispatch('getCharactorByBookId', row)
                .then((rownum)=>{                
                    this.$store.commit('toggleCharactorEdit' , !rownum ? true: false);   
                    if(!rownum){
                        this.$store.commit('getCharactorById', {});
                    }
                    this.$store.commit('displayCharactorPanel' , row.id);
                })
                
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
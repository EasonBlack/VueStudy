
<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item d-flex align-items-center" v-for='(row, index) in rows' :key='index'>
                {{row["name"]}} 
                <!-- <span v-if='row["author"]'>({{row["author"]}})</span> -->
                <!-- <div class='ml-auto'>
                    <a class='btn btn-info text-white ml-auto' @click='detail(row)'>Detail</a>
                    <a class='btn btn-primary text-white ml-auto' @click='edit(row)'>Edit</a>
                </div> -->    
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        methods: {
    
        },
        computed: {
            ...mapState({
                rows:  (state) => state.charactor.rows
            })
        }
    }
</script>
<style lang='scss' scopde>
</style>


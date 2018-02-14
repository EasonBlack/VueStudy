
<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item d-flex align-items-center" v-for='(row, index) in rows' :key='index'>
                {{row["relation"]}}({{row["relationship"]}})

                <div class='ml-auto'  >
                    <a class='btn btn-danger text-white ml-auto' @click='del(row)'>
                        Delete
                    </a> 
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            del(relation) {
               this.$store.dispatch('deleteRelation', relation)
            }
        },
        computed: {
            ...mapState({
                rows:  (state) => state.relation.rows
            })
        }
    }
</script>
<style lang='scss' scopde>
    .dropleft:hover {
        & .dropdown-menu {
            display:block;
        }
    }
    .dropdown-menu {
        margin-right: 0 !important;
        top: 0;
        right: 100%;
        left: inherit;
    }
    
</style>


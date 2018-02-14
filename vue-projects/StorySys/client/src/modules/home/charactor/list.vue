
<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item d-flex align-items-center" v-for='(row, index) in rows' :key='index'>
                {{row["name"]}} 

                <div class='ml-auto'>
                    <div class="btn-group dropleft">
                        <button class="btn btn-secondary dropdown-toggle"  type="button" aria-haspopup="true" aria-expanded="false">
                           Act
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
                            <a class="dropdown-item" @click='edit(row)'>Edit</a>
                            <a class="dropdown-item" @click='showRelation(row)'>Relation</a>
                        </div>
                    </div>
                    <!-- <a class='btn btn-primary text-white ml-auto' @click='edit(row)'>Edit</a> -->
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
            edit(charactor) {
                this.$store.commit('getCharactorById', charactor);
                this.$store.commit("toggleCharactorEdit", true);
            },
            showRelation(charactor) {
                this.$store.dispatch('getRelationByCharactorId', charactor)
                .then((rownum)=>{       
                    this.$store.commit('toggleRelationEdit' , !rownum ? true: false);   
                    this.$store.commit("displayRelationPanel", charactor.id);
                })
            }
        },
        computed: {
            ...mapState({
                rows:  (state) => state.charactor.rows
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


<template>
     <div class='pt-30'>
        <form-row :title='"Name"' class='px-20 mb-20'>
            <select class='form-control'  v-model='cid2' v-if='rows.length'>
                <option v-for='(row, $index) in rows' :key='$index' :value='row.id'>
                    {{row.name}}
                </option>
            </select> 
            <span v-else>No More</span>
        </form-row>
        <form-row :title='"Relation"' class='px-20 mb-20'>
            <input v-model='relation' class='form-control' />
        </form-row>
        <form-row :title='""'>
            <div>
                <a class='btn btn-primary text-white' @click='save' v-if='rows.length'>Save</a>
                <a class='btn btn-danger text-white' @click='back'>Back</a>
            </div>
        </form-row>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import formRow from '$components/form-row/index.vue';
    export default  {
        components: {formRow},
        data() {
            return {
                cid2: '',
                relation: ''
            }
        },
        created() {
            this.cid2 = this.rows.length ? this.rows[0].id : '';
        },
        methods: {
            save() {
                let req = {
                    cid1:  this.hostId,
                    cid2:  this.cid2,
                    relation: this.relation,
                    result: ''
                }     
                this.$store.dispatch("postRelation", req)
                .then(res=>{
                    this.$store.commit("toggleRelationEdit", false)
                })
            },
            back() {
                this.$store.commit("toggleRelationEdit")
            }
        },
        computed: {
            ...mapState({
                hostId : (state) => state.relation.hostId,
                relations:  (state) => state.relation.rows ,
                rows:  (state) => { 
                    let _relations = new Set();
                    _relations.add(state.relation.hostId);
                    state.relation.rows.forEach(r=>{
                        _relations.add(r.cid2);
                    })
                    let _result = state.charactor.rows.filter(c=>{
                        if(!_relations.has(c.id)) {
                            return c
                        }
                    })
                    return _result
                },
                
            })
        }
    }
</script>
<style lang='scss' scoped>
</style>
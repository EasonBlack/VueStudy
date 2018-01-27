<template>
    <div class='pt-30'>
        <form-edit-row :title='"Name"' class='px-20 mb-20' v-model='name'/>
        <form-edit-row :title='"Subname"' class='px-20 mb-20' v-model='subname'/>
        <form-row :title='"Desc"' class='px-20 mb-20'>
            <textarea v-model='desc' class='form-control' />
        </form-row>
        <form-row :title='""'>
            <div>
                <a class='btn btn-primary text-white' @click='save'>Save</a>
                <a class='btn btn-danger text-white' @click='back'>Back</a>
            </div>
        </form-row>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import formDetailRow from '$components/form-row-input/detail.vue';
    import formEditRow from '$components/form-row-input/edit.vue';
    import formRow from '$components/form-row/index.vue';
    export default {
        components: {formDetailRow, formEditRow, formRow},
        data() {
            return {
                name: '',
                subname: '',
                desc: '',
                id: ''
            }
        },
        watch: {
            'detail': function(nv) {
                if(nv) {
                    this.name = nv.name;
                    this.subname = nv.subname;
                    this.bookId = nv.bookId;
                    this.desc = nv.desc;
                    this.id = nv.id;
                }
            }
        },
        methods: {
            save() {
                let req = {
                    id: this.id,
                    bookId : this.bookId,
                    name: this.name,
                    subname:this.subname,
                    desc: this.desc
                }
                this.$store.dispatch("editCharactor", req)
                .then((res)=>{
                    this.$store.commit("toggleCharactorEdit")
                })
                
            },
            back() {
                this.$store.commit("toggleCharactorEdit")
            }
        },
        computed: {
            ...mapState({
                detail: (state) => state.charactor.detail,
                bookId: (state) => state.charactor.bookId,
            })
        }
    }
</script>
<style lang='scss' scoped>
</style>
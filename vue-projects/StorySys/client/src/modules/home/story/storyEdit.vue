<template>
    <div class='pt-30'>
        <form-edit-row :title='"Name"' class='px-20 mb-20' v-model='bookname'/>
        <form-edit-row :title='"Author"' class='px-20 mb-20' v-model='bookauthor'/>
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
                bookname: '',
                bookauthor: '',
                bookid: ''
            }
        },
        watch: {
            'detail': function(nv) {
                if(nv) {
                    this.bookname = nv.name;
                    this.bookauthor = nv.author;
                    this.bookid = nv.id;
                }
            }
        },
        methods: {
            save() {
                this.$store.dispatch("editBook", {id: this.bookid, name: this.bookname, author:this.bookauthor})
                .then((res)=>{
                    this.$store.commit("toggleBookEdit")
                })
                
            },
            back() {
                this.$store.commit("toggleBookEdit")
            }
        },
        computed: {
            ...mapState({
                detail: (state) => state.book.detail
            })
        }
    }
</script>
<style lang='scss' scoped>
</style>
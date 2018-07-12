<template>
    <div>
        <div class='action-wrapper'>
            <el-select
                class='el-select'
                v-model="currentCategory"
                allow-create
                default-first-option
                placeholder="Category">
                <el-option
                    v-for="item in categoryItems"
                    :key="item.ID"
                    :label="item.NAME"
                    :value="item.ID">
                </el-option>
            </el-select>
        </div>
        <div class='action-wrapper'>
            <el-select
                class='el-select'
                v-model="currentKeys"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="Keys">
                <el-option
                    v-for="item in itItems"
                    :key="item.ID"
                    :label="item.NAME"
                    :value="item.ID">
                </el-option>
            </el-select>
        </div>
        <div class='textarea-wrapper'>
            <my-text-area v-model='content' />
        </div>
        <div class='action-wrapper'>
            <button class='btn btn-primary' @click='save'>Save</button>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import myTextArea from '$commoncomponents/myTextArea.vue';
    export default  {
        components: { myTextArea },
        data() {
            return {
                currentCategory: '',
                currentKeys: '',
                content: ''
            }
        },
        created() {
            if(!this.categoryItems.length) {
                this.$store.dispatch('getItCategory')
            }
            if(!this.itItems.length) {
                this.$store.dispatch('getItItems')
            }
        },
        methods: {
            save() {
                this.$store.dispatch('postItCollection', {
                    content: this.content,
                    keys: this.currentKeys.join(','),
                    category: this.currentCategory
                })
            }
        },
        computed: {
			...mapState({
                categoryItems: (state) => state.category.itCategory,
                itItems : (state) => state.key.itItems
            })
		}
     }
</script>
<style lang='scss' soped>
</style>
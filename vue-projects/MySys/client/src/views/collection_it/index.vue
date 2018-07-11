<template>
    <div>
        <div class='action-wrapper'>
            <el-select
                class='el-select'
                v-model="currentCategory"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="Category">
                <el-option
                    v-for="item in litItems"
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
     export default  {
        data() {
            return {
                currentCategory: '',
                currentKey: '',
            }
        },
        created() {
            if(!this.itItems.length) {
                this.$store.dispatch('getItItems')
            }
        },
        computed: {
			...mapState({
                itItems : (state) => state.key.itItems
            })
		}
     }
</script>
<style lang='scss' soped>
</style>
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
            <button class='btn btn-primary' @click='search'>Confirm</button>
        </div>
        <div class='section-wrapper'>
            <div class='container-fluid'>
                <div class='row'>
                    <div class='col-6 collection-wrapper' v-for='item in collectionItems' :key='item.ID'>
                        <collection-card :item='item' />
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import collectionCard from '../card.vue';
    export default {
        components: { collectionCard },
        data() {
            return {
                currentCategory: '',
                currentKeys: '',
                content: '',
                collectionItems: []
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
            search() {
                this.$store.dispatch('getItCollection', {
                    category: this.currentCategory,
                    key: this.currentKeys.join(',')
                }).then(result => {
                    this.collectionItems = result.data;
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
<style lang='scss' scoped>
    .collection-wrapper {
        display:flex;
        padding-left:0px;
        margin-bottom:10px;
    }
</style>

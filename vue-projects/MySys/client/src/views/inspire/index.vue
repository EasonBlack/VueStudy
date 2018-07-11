<template>
    <div>
        <div class='action-wrapper'>
            <el-select
                class='el-select'
                v-model="currentKeys"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="请选择文章标签">
                <el-option
                    v-for="item in litItems"
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
    import {ApiInspire} from '$api/index';
    import myTextArea from '$commoncomponents/myTextArea.vue';
    export default  {
        components:{myTextArea},
        data() {
            return {
                content:'',
                currentKeys :'',
            }
        },
        created() {
            if(!this.litItems.length) {
                this.$store.dispatch('getLitItems')
            }
        },
        methods: {
            save() {
                if(!this.currentKeys.length) return ;

                let _currentKeys = this.currentKeys.filter(o=>isNaN(o));
                let _litItemNames = this.litItems.map(o=> o.NAME);
                let newItems = _currentKeys.filter((v)=>{ 
                    return _litItemNames.indexOf(v) === -1 
                })
           
                if(newItems.length) {
                    this.$store.dispatch('postLitItems', {items: newItems})
                    .then(()=>{
                        let _orginKeys = this.currentKeys.filter(o=>!isNaN(o)) 
                        this.currentKeys = _orginKeys.concat(this.litItems.filter(o=>newItems.indexOf(o.NAME)!=-1).map(o=>o.ID));
                        this.saveInspire();
                    })
                } else {
                    this.saveInspire();
                }                       
            },

            saveInspire() {
                 ApiInspire.PostInspire({content: this.content, keys: this.currentKeys.join(',')})
                 .then(o=>{
                     alert('Finish')
                 })
            }
        },
        computed: {
			...mapState({
                litItems : (state) => state.key.litItems
            })
		}
    }
</script>
<style lang='scss' soped>
    .el-select {
        width:30%;
    }
</style>
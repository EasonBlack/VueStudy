<template>
    <div>
        <ul class='index-wrapper'>
            <li v-for='(item,$index) in items' :key='$index' class='index-box mr-10' @click='selectItem = item'>
                {{$index+1}}
            </li>
        </ul>
        <div class='textarea-wrapper'>
            <my-text-area v-model='selectItem.CONTENT' />
        </div>
        <div class='action-wrapper'>
            <button class='btn btn-primary' @click='save'>Save</button>
        </div>
    </div>
</template>
<script>
    import myTextArea from '$commoncomponents/myTextArea.vue';
    import { ApiCurrent } from '$api/index';
    export default {
        components: {myTextArea},
        data() {
            return {
                items: [],
                selectItem: {}
            }
        },
        created() {
           this.getCurrent();
           //console.log(current);
        },
        methods: {  
            
            getCurrent() {
                ApiCurrent.GetCurrent()
                .then(r=>{
                    this.items = r.data;
                    this.selectItem = this.items.length ? this.items[0]: {}       
                })
            },
            
            save() {
                let _item = this.selectItem;
                ApiCurrent.GetAfterPutCurrent({ID: _item.ID, content: _item.CONTENT})
                .then(o=>{               
                    console.log(o);
                    this.selectItem = o[0];
                })
                
            }
        }
    }
</script>
<style lang='scss' soped>
    .index-wrapper {
        display:flex;
        height:50px;
        line-height:50px;
        align-items: center;
        padding-left:20px;
        padding-top:10px;
        margin-bottom:0px;
    }
    .index-box {

        display:flex;
        justify-content: center;
        align-items: center;
        width:30px;
        height:30px; 
        background-color: #41bb8a;
        border-radius: 50%;
        border: 3px solid #ffb958;
        color: white;
        font-size: 18px;
        cursor: pointer;
    }

   
 
</style>
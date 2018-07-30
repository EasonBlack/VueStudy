<template>
    <div class='position-relative' style='overflow: hidden'>
        <div class='list-wrapper'>
            
            <div v-for='item in listItems' :key='item.ID'>
                <pre>{{item.CONTENT}}</pre>
            </div>
            
        </div>
        <div class='new-wrapper'>
            <div class='textarea-wrapper'>
                <my-text-area v-model='newContent' />
            </div>
            <div class='action-wrapper'>
                <button class='btn btn-primary mr-10' @click='save'>Save</button>
                <button class='btn btn-primary' @click='back'>Back</button>
            </div>
        </div>
    </div>
</template>
<script>
    import myTextArea from '$commoncomponents/myTextArea.vue';
    import { ApiDaily } from '$api/index';
    export default  {
        components: {myTextArea},
        data() {
            return {
                newContent: '',
                listItems: []
            }
        },
        created() {
            this.getDaily();
        },
        methods: {  
            getDaily() {
                ApiDaily.GetDaily()
                .then(r=>{
                    console.log(r);
                    this.listItems = r.data;    
                })
            },

            save() {},
            back() {}
        }
    }
</script>
<style lang='scss' scoped>
    .new-wrapper {
        position:absolute;
        top: 0;
        right: -100%;
        width:100%;
    }
</style>
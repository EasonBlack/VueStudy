<template>
    <div class='position-relative' style='overflow: hidden'>
        <div class='list-wrapper'>
            
            <div v-for='item in listItems' :key='item.ID'>
                <pre>{{item.CONTENT}}</pre>
            </div>
            
        </div>
        <div class='new-wrapper'
            :class='{active: newWrapperDisplay}'
        >
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
    import Hammer from 'hammerjs';
    export default  {
        components: {myTextArea},
        data() {
            return {
                newContent: '',
                listItems: [],

                newWrapperDisplay: false,
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
        },
        mounted() {
            let listWrapper = document.querySelector('.list-wrapper');
            let newWRapper = document.querySelector('.new-wrapper');
            let listHammer = new Hammer(listWrapper);
            let newHammer = new Hammer(newWRapper);
            listHammer.on('swipeleft', (e) => {
                this.newWrapperDisplay = true;
            });
        },
    }
</script>
<style lang='scss' scoped>
    .new-wrapper {
        position:absolute;
        top: 0;
        right: -100%;
        width:100%;

        &.active {
            right: 0;
        }
    }
</style>
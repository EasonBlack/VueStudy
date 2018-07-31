<template>
    <div class='position-relative' style='overflow: hidden'>
        <div class='list-wrapper'>
            <div v-for='(items , date) in dailyItems' :key='date'>
                <div class='date-card mb-20 bg-warning'>{{date}}</div>
                <div class='pl-20'>
                    <div v-for='(item, $index) in items' :key='$index'>
                        <pre>{{item}}</pre>
                    </div>
                </div>
               
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
                dailyItems: [],

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
                    let _items = r.data;
                    let resultItems = {};
                    _items.forEach(t=>{
                        if(!resultItems[t.CREATE_TIME]) {
                            resultItems[t.CREATE_TIME] = []
                        }
                        resultItems[t.CREATE_TIME].push(t.CONTENT);
                    })
                    this.dailyItems = resultItems;    
                })
            },

            save() {
                let _content = this.newContent.replace(/\\/g,'\\\\');
                _content = _content.replace(/\'/g,'\\\'');
                _content = _content.replace(/\%/g,'\\\%');

                ApiDaily.PostDaily({content: this.newContent})
                .then(r=>{
                    this.newContent = "";
                    this.newWrapperDisplay = false;
                    this.getDaily();
                })
            },
            back() {
                this.newContent = '';
                this.newWrapperDisplay = false;
            }
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
    .list-wrapper {
        height:100%;
        overflow:hidden;
        padding: 20px 20px;
        pre {
            color: white;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .date-card {
            padding:2px 5px;
            border-radius: 2px;
            font-size:14px;
            color: white;
            width:120px;
        }
    }
    .new-wrapper {
        position:absolute;
        top: 0;
        right: -100%;
        width:100%;
        transition: right  0.5s ease;
        &.active {
            right: 0;
        }
    }
</style>
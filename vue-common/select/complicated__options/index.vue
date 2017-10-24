<template>
    <div class='select__container'>
        <div  class='select__wrapper'>
            <span class='icon-down-open select__arrow' @click.prevent.stop='togglePanel'></span>
            {{selectedOption.title}}
            <ul class='options__wrapper' v-if='isOptionsShow'>
                <li v-for='(item,$index) in items' :key='$index' @click='selectOption(item)'>{{item.title}}</li>
                <li>
                    <date-picker style='width:150px;' v-model="startDate" /> -  <date-picker style='width:150px;' v-model="endDate" @change='endDateChange'/> 
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {DatePicker} from 'element-ui';
    import moment from 'moment';
    export default  {
        components: {DatePicker},
        data() {
            return {
                isOptionsShow: false,
                startDate: null,
                endDate: null,
                selectedOption: {},
                items: [
                    {value: 1, title: 'aaaaa'},
                    {value: 2, title: 'bbbbb'},
                    {value: 3, title: 'ccccc'}
                ]
            }           
        },
        methods: {
            togglePanel() {
                this.isOptionsShow = !this.isOptionsShow;
            },
            selectOption(item) {
                this.isOptionsShow = false;
                this.selectedOption = item;
            },
            endDateChange() {
                this.isOptionsShow = false;
                this.selectedOption = {
                    title: moment(this.startDate).format('YYYY-MM-DD') + '-' +  moment(this.endDate).format('YYYY-MM-DD')
                }
            }
        }
    }
</script>
<style lang='scss' scoped>
    .select__wrapper {
        width:200px;
        height:40px;
        line-height:40px;
        border-radius:5px;
        border: 1px solid steelblue;
        padding-left:10px;
        position:relative;
        background-color: white;
        font-size:14px;
    }
    .select__arrow {
        position: absolute;
        right: 5px;
    }
    .options__wrapper {
        position:absolute;
        top:40px;
        left: 0px;
        padding:10px;
    
        background-color: white;
        list-style: none;
        li {
            min-width:200px;
            height: 40px;
            line-height:40px;
            display:flex;
        }
    }

</style>
<template>
    <div class='container'
         v-bind:class='{
            active: active
        }'
    >
        <div class='edit__section'>
            <label class='edit__title'>Title</label>
            <input type=text placeholder="title" v-model='title'/>
        </div>
        <div class='edit__section'>
            <label class='edit__title'>Size</label>
            <input type=radio name='size' value='1'   v-model="sizeSelected"/> <label>1 *</label>
            <input type=radio name='size' value='0.5' v-model="sizeSelected"/> <label>0.5 *</label>
            <input type=radio name='size' value='0.3' v-model="sizeSelected"/> <label>0.3 *</label>
        </div>
        <div class='edit__section'>
            <label class='edit__title'>Data Type</label>
            <select v-model="dataSelected">
                <option v-for='m in dataType' :value='m'>{{m.title}}</option>
            </select>
        </div>
        <div class='edit__section'>
            <label class='edit__title'>Chart Type</label>
            <select v-model="chartSelected">
                <option v-for='m in chartType' :value='m'>{{m.title}}</option>
            </select>
        </div>
        <div class='edit__section'>
            <a class='button button__confirm' v-on:click='confirm'>Confirm</a>
        </div>
        <div class='close__section' v-on:click='closePanel'>
            <img :src='closeImg'>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import closeImg from 'assets/icons/close.png'
    export default{
        props: ['active'],
        data(){
            return{
                closeImg: closeImg,
                dataSelected : '',
                chartSelected : '',
                sizeSelected: 1,
                title: ''
            }
        },
        methods: {
            closePanel:function() {
                this.$emit('toggleAddPanel',0);
            },
            confirm:function() {
                 this.$store.dispatch('fetchDataById',{
                    dataInfo: this.dataSelected,
                    chartInfo: this.chartSelected,
                    size: this.sizeSelected,
                    title: this.title
                 });
            }
        },
        computed: {
             ...mapState({
	  	        chartType : 'chartType',
	  	        dataType: 'dataType'
		   })
        }
    }

</script>

<style lang='scss' scoped>
    .container {
        width: 100vw;
        height: 240px;
        background-color: steelblue;
        position: absolute;
        bottom: 0;
        left: 0;
        margin-bottom: -240px;
        transition: all 0.5s ease-out;
        display: flex;
        flex-wrap: wrap;
        &.active {
            margin-bottom: 0px;
        }
    }

    .edit__section {
        padding-left: 20px;
        align-items: center;
        flex: 1;
        min-width: 50vw;
        display: flex;
        height: 80px;
        .edit__title {
            width: 100px;
            margin-right: 10px;
        }
    }

    .close__section {
        position: absolute;
        right: 20px;
        top: 20px;
    }


</style>

<template>
    <div>
        <div class='form__section'>
            <div class='form__row'>
                <label class='form__left'>Name:</label>
                <input class='form__right' type=text name='name' v-model='newName'/>
            </div>
            <div class='form__row'>
                <label class='form__left'>Sites:</label>
                <ul class='form__right'>
                    <li v-for="site in sites">
                        <input :id="'chk_'+ site.id" type="checkbox" :value="site.name" v-model="newSites"/>
                        <label :for="'chk_'+ site.id">{{site.name}}</label>
                    </li>
                </ul>
            </div>
        </div>

        <div class='bottom__section'>
            <div class='btn__wrapper'>
                <a class='btn__confirm' v-on:click='confirmHandle'>Confirm</a>
            </div>
            <div class='btn__wrapper'>
                <a class='close__confirm' v-on:click='closeHandle'>Close</a>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        props: ['active', 'sites', 'currentSites', 'currentName', 'currentId'],
        data(){
            return{
                newName: '',
                newSites: []
            }
        },
        methods: {
            confirmHandle: function() {
                console.log(this.newName);
                this.$emit('confirmHandle', {id: this.currentId, name: this.newName, sites: this.newSites});
            },
            closeHandle:function() {
                this.$emit('closeHandle', {flag: false});
            }
        },
        watch: {
             'currentName' : function(val, oldval) {
                 this.newName = val;
             },
             'currentSites': function(val,oldval) {
                 if(val) {
                    this.newSites = val.slice();
                 }
             }
        },
        computed:  {


        }
    }


</script>

<style lang='scss' scoped>

    .btn__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

    .btn__confirm {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        background-color: steelblue;
        color: white;
        text-align: center;
    }

    .close__confirm {
        display: block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        background-color: coral;
        color: white;
        text-align: center;
    }
</style>

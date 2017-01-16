<template>
    <div class='add-panel__container'
        v-bind:class="{
            active: active
        }"
    >
        <div class='form__row form__col-row'>
             <label class='form__title'>Content  :</label>
             <textarea class='form__textarea' type=text name='name' v-model='newTitle'/>
        </div>
        <div class='form__row'>
            <label class='form__left'>Type  :</label>
            <ul class='form__right'>
                <li>
                    <input id="chkt" type="radio" value="t" name='question_type'  v-model="newType"/>
                    <label for="chkt">Text</label>
                </li>
                <li>
                     <input id="chka" type="radio" value="a" name='question_type'  v-model="newType"/>
                     <label for="chka">Array</label>
                </li>
            </ul>
         </div>
         <div class='form__row'>
            <label class='form__left'>Status  :</label>
            <ul class='form__right'>
                <li>
                    <input id="chk1" type="radio" value=1 name='question_display'  v-model="newDisplay"/>
                    <label for="chk1">有效</label>
                </li>
                <li>
                     <input id="chk0" type="radio" value=0 name='question_display'  v-model="newDisplay"/>
                     <label for="chk0">无效</label>
                </li>
            </ul>
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
    export default {
        props: ['active', 'questionCurrent'],
        data: function() {
            return {
                currentId : '',
                newTitle: '',
                newType: 't',
                newDisplay: true
            }
        },
        watch: {
            'questionCurrent': function(val) {
                this.currentId = val.id;
                this.newTitle = val.title;
                this.newType = val.type;
                this.newDisplay = val.display;
            }
        },

        methods: {

            confirmHandle: function() {
                this.$emit('confirmHandle', {
                    id: this.currentId,
                    title: this.newTitle,
                    type: this.newType,
                    display: this.newDisplay
                })
                this.clearNew();
            },
            closeHandle: function() {
                this.$emit('closeHandle');
                this.clearNew();
            },
            clearNew: function(){
                this.newTitle = '';
                this.newType = 't';
                this.newDisplay= true;
            }

        }
    }
</script>
<style lang='scss' scoped>
    .add-panel__container {
        width:400px;
        height:100vh;
        overflow:auto;
        background-color:#334249;
        top:0;
        left: -400px;
        position:absolute;
        z-index:1;
        transition:all 0.5s ease;
        padding-top:60px;
        &.active {
            left: 0px;
        }
    }

     .btn__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
     }

     .btn__confirm {
         display: block;
         width: 50%;
         height: 30px;
         line-height: 30px;
         background-color: steelblue;
         color: white;
         text-align: center;
     }

     .close__confirm {
         display: block;
         width: 50%;
         height: 30px;
         line-height: 30px;
         background-color: coral;
         color: white;
         text-align: center;
     }
</style>
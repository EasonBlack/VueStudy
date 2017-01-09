<template>
    <div class='add-panel__container'
        v-bind:class="{
            active: active
        }"
    >
        <div class='form__row form__col-row'>
             <label class='form__title'>Name  :</label>
             <textarea class='form__textarea' type=text name='name' v-model='newTitle'/>
        </div>
         <div class='form__row'>
            <label class='form__left'>Type  :</label>
            <ul class='form__right'>
                <li>
                    <input id="chktext" type="radio" value="1" v-model="newType"/>
                    <label for="chktext">Text</label>
                </li>
                <li>
                    <input id="chkradio" type="radio" value="2" v-model="newType"/>
                    <label for="chkradio">Radio</label>
                </li>
            </ul>
         </div>
         <div class='form__row form__col-row' v-if='newType == "2"'>
             <label class='form__title'>Answer  :</label>
             <div class='form__wrapper'>
                <input type='text' class='form__new_input' v-model='newAnswer' />
                <div class='form__icon form__add'>
                    <a class='icon-plus' v-on:click='addAnswer'></a>
                </div>
             </div>
             <div class='form__wrapper' v-for='(an,index) in answers'>
                 <label>{{an.title}}</label>
                 <div class='form__icon form__delete'>
                     <a class='icon-minus' v-on:click='delAnswer(an, index)'></a>
                 </div>
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
    export default {
        props: ['active'],
        data: function() {
            return {
                newTitle: '',
                newType: '',
                newAnswer: '',
                answers: []
            }
        },
        methods: {
            addAnswer :function() {
                this.answers.push({ title: this.newAnswer });
                this.newAnswer = '';
            },
            delAnswer: function(item, index) {
                this.answers.splice(index, 1);
            },
            confirmHandle: function() {
                this.$emit('confirmHandle', {
                    title: this.newTitle,
                    type: this.newType,
                    answers: this.answers
                })
                this.clearNew();
            },
            closeHandle: function() {
                this.$emit('closeHandle');
                this.clearNew();
            },
            clearNew: function(){
                this.newTitle = '';
                this.newType = '';
                this.answers=[];
                this.newAnswer = '';
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
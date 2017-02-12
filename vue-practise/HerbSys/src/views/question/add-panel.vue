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
            <ul class='form__right form__right_100'>
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
            <ul class='form__right form__right_100'>
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
         <div class='form__row' v-if='newType=="a"'>
             <label class='form__left'>Answer  :</label>
             <div class='form__right flex__2 '>
                <input type='text' class='txt__defaultanswer'  v-model='currentsDefault'/>
                <span class='icon-plus list__add' v-on:click='addCurrentToDefaultAnswer()'></span>
             </div>
         </div>
         <div class='form__row'>
             <label class='form__left'></label>
             <ul class='form__right flex__2'>
                 <li v-for='(item, index) in defaultAnswer'>
                    <span class='icon-minus list__minus'  v-on:click='deleteFromDefaultAnswer(index)'></span>{{item}}
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
    import dropDownAnswer from '../../common/dropdownanswer/index.vue';

    export default {
      components: {dropDownAnswer},
        props: ['active', 'questionCurrent'],
        data: function() {
            return {
                currentId : '',
                newTitle: '',
                newType: 't',
                newDisplay: true,
                currentsDefault: '',
                defaultAnswer: [],
            }
        },
        watch: {
            'questionCurrent': function(val) {
                this.currentId = val.id;
                this.newTitle = val.title;
                this.newType = val.type;
                this.newDisplay = val.display;
                this.defaultAnswer = val.default_answer || [];
                this.currentsDefault = '';
            }
        },

        methods: {

            confirmHandle: function() {
                this.$emit('confirmHandle', {
                    id: this.currentId,
                    title: this.newTitle,
                    type: this.newType,
                    display: this.newDisplay,
                    answers: this.defaultAnswer
                })
                this.clearNew();
            },
            addCurrentToDefaultAnswer: function() {
                this.defaultAnswer.push(this.currentsDefault);
                this.currentsDefault = '';
            },
            deleteFromDefaultAnswer: function(i) {
                 this.defaultAnswer.splice(i, 1);
            },
            closeHandle: function() {
                this.$emit('closeHandle');
                this.clearNew();
            },
            clearNew: function(){
                this.newTitle = '';
                this.newType = 't';
                this.newDisplay= true;
            },
            emitAnswerHandle: function(obj){
                console.log(obj);
                this.defaultAnswer.push(obj.val);
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

    .txt__defaultanswer {
         width: 80%;
         height: 30px;
         padding-left: 5px;
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

      .list__add {
          width: 30px;
          height: 30px;
          background-color: steelblue;
          border-radius: 50%;
          color: white;
          padding-left: 7px;
          padding-top: 6px;
          display: inline-block;
      }
      .list__minus {
          width: 20px;
          height: 20px;
          background-color: coral;
          border-radius: 50%;
          color: white;
          padding-left: 2px;
          padding-top:2px;
          display: inline-block;
          margin-right:5px;
      }
</style>
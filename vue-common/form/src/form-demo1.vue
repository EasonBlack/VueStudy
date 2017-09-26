<template>
  <div class='form__container'>
    <div class='form__row'>
        <form-input-wrapper :title='"Name"' >
          <form-input-has-validation :validator='"required"' v-model="newUser.name" :inputName='"name"' />
        </form-input-wrapper>
    </div>
    <div class='form__row'>
        <form-input-wrapper :title='"Age"' :marginauto='"20%"'>
          <form-input-has-validation  :validator='"required|digits"' v-model="newUser.age" :inputName='"age"'/>
        </form-input-wrapper>
    </div>
    <div class='form__row m-h-p20' >
        <form-input-wrapper :title='"Num"' :isMulti='true'>
          <form-input-has-validation  :validator='"required|digits"' v-model="newUser.num1" :inputName='"Num1"'/>
          <form-input-has-validation  :validator='"required|digits"' v-model="newUser.num2" :inputName='"Num2"'/>
        </form-input-wrapper>     
    </div>
    <div class='form__row'>
      <form-input-wrapper :title='"Date"'>
        <grid-col :colspan='11'>
          <form-input-has-validation   :validator='""' v-model="newUser.startDate" :inputName='"start date"'/>    
        </grid-col>
        <grid-col :colspan='2' class='line'>-</grid-col>
        <grid-col :colspan='11'>
          <form-input-has-validation  :validator='""' v-model="newUser.endDate" :inputName='"end date"'/>    
        </grid-col>  
      </form-input-wrapper>
    </div>
    <div class='form__row'>
      <grid-col :offleft='2' :colspan='14'>
        this question is very very long, a label couldn't hold it 
      </grid-col>
      <grid-col :colspan='6'>
        <input type=checkbox />
        <input type=checkbox />
      </grid-col>
    </div>
    <div class='form__row'>
      <form-input-wrapper>
         <button @click='confirm'>Confirm</button>
      </form-input-wrapper>
    </div>
  </div>
</template>
<script>
  import formInputWrapper from '../form-input/input-wrapper.vue';
  import formInputHasValidation from '../form-input/input-has-validation.vue';
  import gridCol from '../grid/grid-col.vue';
  export default {
    //$validates: true,
    components: {formInputWrapper, formInputHasValidation,gridCol},
    data() {
      return {
        newUser: {
          name: '',
          age: ''
        }
      }
    },
    methods: {
      confirm() {
        console.log(this.errors.items);
        this.$validator.validateAll().then(result=>{
          console.log(result);
        })
        if(this.errors.items.length) {
          alert('somthing wrong');
          return false
        } 
        console.log(this.newUser);
        
      }
    }
  }
</script>
<style scoped lang='scss'>
  .form__container {
    width:100%;
  }
  .form__row {
    display:flex;
  }
  .m-h-p20 {
    margin: 0 20%;
  }
  .line {
    position:relative;  
    display:flex;
    justify-content:center;
    align-items: center;
  }
</style>
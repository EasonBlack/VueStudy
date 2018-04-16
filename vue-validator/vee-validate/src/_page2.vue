<template>
  	<div  class='main__container'>
        <div class="row">
            <input v-validate="'required|numeric|min:8'" :class="{ 'is-danger': errors.has('password') }" name="password" type="password" placeholder="Password" >
        </div>

        <div class="row">
            <input v-validate="'required|url'" :class="{ 'is-danger': errors.has('url') }" name="url"  placeholder="http://" >
        </div>
       
        <div class="row">
            <div>
                <input v-validate="'required|decimal'" :class="{ 'is-danger':  errors.has('num2') }" name="num2" type="text" placeholder="decimal test" >
            </div>
        </div>
        
        <div class="row">
             <button @click="submit">Submit</button>
        </div>

  	    <div class='mask' v-if='errorList.length'>
            <div class='popup'>
                <ul v-for='(error,$index) in errorList' :key='$index'>
                  <li>{{error}}</li>
                </ul>
                <button @click='back'>Back</button>
            </div>
        </div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        isSubmit: false,
        errorList: [],
      };
    },
    methods: {
      submit() {
         
          this.$validator.validateAll().then(res=>{
            if(!res) {
              let _errors = this.$validator.errors.items;
              let _errorList = []
              _errors.forEach(v => {
                _errorList.push(v.msg);
              })
              this.errorList =  _errorList ;
              this.$forceUpdate();
            }
           
            console.log(this.$validator);
            console.log(res);
          })
      },

      back() {
        this.errorList = [];
      }
    }
  }
</script>

<style lang='scss' scoped>
  .mask {
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .popup {
    width:400px;
    padding:30px;
    background-color:white; 
  }

</style>
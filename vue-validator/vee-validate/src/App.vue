<template>
	<div  class='main__container'>
        <div class="row">
            <input v-validate="'required|numeric|min:8'" :class="{ 'is-danger': errors.has('password') }" name="password" type="password" placeholder="Password" >
            <span class="help" :class="{'is-danger': errors.has('password') }">{{ errors.first('password') }}</span>
        </div>
        <div class="row">
            <input v-validate="'required|url'" :class="{ 'is-danger': errors.has('url') }" name="url"  placeholder="http://" >
            <span class="help" :class="{'is-danger': errors.has('url') }">{{ errors.first('url') }}</span>
        </div>
        <div class="row">
            <input v-validate="'required|testvee'" :class="{ 'is-danger': errors.has('test') }" name="test" type="text" placeholder="test" >
            <span class="help" :class="{'is-danger': errors.has('test') }">{{ errors.first('test') }}</span>
        </div>
        <div class="row">
            <div>
                <input v-validate="'required'" :class="{ 'is-danger': isSubmit && errors.has('aa') }" name="aa" type="text" placeholder="aa" >
                <span class="help" v-show="isSubmit" :class="{'is-danger': errors.has('aa') }">{{ errors.first('aa') }}</span>
                <input v-validate="'confirmed:aa|required'" :class="{ 'is-danger': isSubmit && errors.has('bb') }" name="bb" type="text" placeholder="bb" >
                <span class="help" v-show="errors.has('bb')" :class="{'is-danger': errors.has('bb') }">not match</span>
                <span class="help" v-show="errors.has('bb')" :class="{'is-danger': errors.has('bb') }">should has sth</span>

            </div>
        </div>
        <div class="row">
            <div>
                <input v-validate="'required|testvee'" :class="{ 'is-danger': isSubmit && errors.has('test') }" name="test" type="text" placeholder="test" >
                <span class="help" v-show="isSubmit" :class="{'is-danger': errors.has('test') }">{{ errors.first('test') }}</span>
            </div>
        </div>
        <div class="row">
            <div>
                <input v-validate="'required|numeric'" :class="{ 'is-danger': isSubmit && errors.has('num1') }" name="num1" type="text" placeholder="number test" >
                <span class="help" v-show="isSubmit" :class="{'is-danger': errors.has('num1') }">{{ errors.first('num1') }}</span>
            </div>
        </div>
        <div class="row">
            <div>
                <input v-validate="'required|decimal'" :class="{ 'is-danger': isSubmit && errors.has('num2') }" name="num2" type="text" placeholder="decimal test" >
                <span class="help" v-show="isSubmit" :class="{'is-danger': errors.has('num2') }">{{ errors.first('num2') }}</span>
            </div>
        </div>
        <div class="row">
            <div>
                <input v-validate="'required'" :class="{ 'is-danger': isSubmit && errors.has('password1') }" name="password1" type="text" placeholder="Password" >
                <span class="help" v-show="isSubmit" :class="{'is-danger': errors.has('password1') }">{{ errors.first('password1') }}</span>
                <input v-validate="'required|confirmed:password1'" :class="{ 'is-danger': isSubmit && errors.has('password2') }" name="password2" type="text" placeholder="Password Again" >
                <span class="help" v-show="isSubmit" :class="{'is-danger': errors.has('password2') }">{{ errors.first('password2') }}</span>
            </div>
        </div>
        <div class='row'>
            <div>
                <date-picker v-model="startDate" 
                 v-validate="{
                     required: true,
                     dateless:{
                        target: this.endDate,
                        targetName: 'End Date'
                     }
                 }"
                 
                name='startDate'></date-picker>
               
                 -
                <date-picker v-model="endDate" v-validate="'required'" name='endDate'></date-picker>
                
                <span class="help" v-show="isSubmit" :class="{'is-danger': errors.has('startDate') }">{{ errors.first('startDate') }}</span>  
                <span class="help" v-show="isSubmit" :class="{'is-danger': errors.has('endDate') }">{{ errors.first('endDate') }}</span>
            </div>
        </div>
        <div class="row">
             <button @click="submit">Submit</button>
         </div>
	</div>
</template>

<script>
    import {DatePicker} from 'element-ui';
	export default {
        components: {DatePicker},
		data() {
			return {
                isSubmit:false,
                startDate: null,
                endDate: null
			}
		},
		methods: {
            submit() {
                this.isSubmit = true;
                console.log(this.model);
            },
            getError(field, rule) {
                if(this.errors.errors.find(o=>o.field == field && o.rule == rule)) {
                    return true;
                } else {
                    return false;
                }

            }
		}
	}
</script>

<style lang='scss'>
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: Arial;
    }

    .main__container {
        padding:20px;
    }

    .row {
        margin-bottom:20px;
    }
    input.is-danger {
        border-color: #ff3860;
    }

    .help.is-danger {
        color: #ff3860;
    }
</style>
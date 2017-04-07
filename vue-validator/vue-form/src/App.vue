<template>
	<div  class='main__container'>
        <div class="row">
           <vue-form  :state="formstate">
                <validate >
                        <label>Name</label>
                        <input type="text" name="name" required v-model="model.name">
                </validate>
                <field-messages name="name" show="$touched || $submitted" >
                        <div  class="success__msg">Success!</div>
                        <div class="error__msg" slot="required">Name is a required field</div>
                </field-messages>


               <validate :custom="{testv2: testv2}">
                   <label>NAME2</label>
                   <input  type="text" name="name2" required :testv2="model.name" v-model="model.name2"/>
               </validate>
               <field-messages name="name2" show="$touched || $submitted" >
                   <div class="success__msg">Success!</div>
                   <div class="error__msg" slot="testv2">not = name</div>
                   <div class="error__msg" slot="required">this is a required field</div>
               </field-messages>

               <validate :custom="{testv: testv}">
                   <label>EEE</label>
                   <input  type="text" name="eee" required v-model="model.eee"/>
               </validate>
               <field-messages name="eee" show="$touched || $submitted" >
                   <div class="success__msg">Success!</div>
                   <div class="error__msg" slot="testv">not = abc</div>
                   <div class="error__msg" slot="required">this is a required field</div>
               </field-messages>


           </vue-form>
           <div>{{model}}</div>
        </div>

	</div>
</template>

<script>
    import vueForm from 'vue-form';
	export default {
	    mixins: [vueForm.mixin],
		data() {
			return {
			    formstate : {},
                model: {
                    name: '',
                    name2: '',
                    eee: ''
                }
			}
		},
        methods: {
            testv: function(value) {
                return value == 'abc'
            },
            testv2: function(value,attr) {
                console.log(value, attr);
                return value == attr
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
<template>
	<div  class='main__container'>
        <div class="row">
           <vue-form  :state="formstate">
                <validate >
                        <label>Name</label>
                        <input type="text" name="name" required v-model="model.name">
                        <field-messages name="name" show="$touched" >
                          <div>Success!</div>
                          <div slot="required">Name is a required field</div>
                        </field-messages>
                </validate>
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
                    name2: ''
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
<template>
	<div  class='main__container'>

        <div class='row'>
            <form-input :title='"NAME"'
                v-validate="'required|numeric|min:8'"
                v-model="name"
                name="name">
                <template  slot="errormessage"  scope="props">
                     <div  v-if='(props.error || extraError) && isSubmit '>
                          {{props.error || extraError}}
                     </div>
                </template>

            </form-input>
        </div>

        <div class='row'>
             <form-input :title='"AGE"'
                 v-validate="'required|max:4'"
                 v-model="age"
                 name="age">
                 <template  slot="errormessage"  scope="props">
                     <div  v-if='props.error && isSubmit '>
                          {{props.error }}
                     </div>
                  </template>
             </form-input>
        </div>

        <div class="row">
             <button @click="submit">Submit</button>
         </div>
	</div>
</template>

<script>
    import FormInput from '../form-input/index.vue';
	export default {
	    components:{FormInput},
	    directive: {},
		data() {
			return {
                isSubmit:false,
                name: '',
                age: '',
                extraError: '123'
			}
		},
		methods: {
            submit() {
                this.isSubmit = true;
                this.extraError='sssss sss sss';
                console.log(this.name);
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
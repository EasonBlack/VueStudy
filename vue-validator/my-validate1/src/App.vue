<template>
	<div  class='main__container'>

        <div class='row'>
            <form-input :title='"NAME"'
                v-validate="'required|numeric|min:8'"
                v-model="name"
                :error_flag = 'isSubmit'
                name="name">
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
                name: ''
			}
		},
		methods: {
            submit() {
                this.isSubmit = true;
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
<template>
	<div  class='main__container'>
        <div class="row">
            <input v-validate="'required|numeric|min:8'" :class="{ 'is-danger': errors.has('password') }" name="password" type="password" placeholder="Password" >
            <span class="help" :class="{'is-danger': errors.has('password') }">{{ errors.first('password') }}</span>
        </div>
        <div class="row">
            <input v-validate="'required|testvee'" :class="{ 'is-danger': errors.has('test') }" name="test" type="text" placeholder="test" >
            <span class="help" :class="{'is-danger': errors.has('test') }">{{ errors.first('test') }}</span>
        </div>
        <div class="row">
            <div>
                <input v-validate="'required|testvee'" :class="{ 'is-danger': isSubmit && errors.has('test') }" name="test" type="text" placeholder="test" >
                <span class="help" v-show="isSubmit" :class="{'is-danger': errors.has('test') }">{{ errors.first('test') }}</span>
            </div>
            <div>
                <button @click="submit">Submit</button>
            </div>
        </div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
                isSubmit:false
			}
		},
		methods: {
            submit() {
                this.isSubmit = true;
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
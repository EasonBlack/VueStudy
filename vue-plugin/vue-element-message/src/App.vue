<template>
	<div>
       <button @click="confirm">Confirm</button>
	</div>
</template>

<script>
    import { MessageBox } from 'element-ui'
	export default {
		data() {
			return {}
		},
        methods: {
            confirm() {
                MessageBox.alert('hello', 'xxx', {
                    confirmButtonText: 'OK',
                    callback: action => {
                        console.log('yes');
                    }
                });
            }
        }
	}
</script>
<style>
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: Arial;
    }


</style>
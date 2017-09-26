<template>
	<div>
       <button @click="confirm">Confirm</button>
       <button @click="success">Success</button>
       <button @click="error">Error</button>
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
            },
            success() {
                 MessageBox.alert('Save somthing successful ! ', 'Success', {
                    confirmButtonText: 'OK',
                    type: 'success',
                    callback: action => {
                        console.log('yes');
                    }
                });
            },
            error() {
                MessageBox.alert('Somthing is wrong ! ', 'Error', {
                    confirmButtonText: 'Return',
                    type: 'error',
                    callback: action => {
                        console.log('error');
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
<template>
	<div>
       <button @click="success">Success</button>
	</div>
    
</template>

<script>
 
	export default {
      
		data() {
			return {}
		},
        methods: {
           
            success() {
                this.$msg.display('Save somthing successful ! ', "success",  "Success", ()=>{console.log('xxxx')})
                //  this.$msg.alert('Save somthing successful ! ', 'Success', {
                //     confirmButtonText: 'OK',
                //     type: 'success',
                //     callback: action => {
                //         console.log('yes');
                //     }
                // });
            },
           
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
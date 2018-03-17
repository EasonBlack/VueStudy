<template>
	<div class='container-fluid' style='padding-top:50px;'>
		<form>
			<div class='row'>
				<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
					<input-group :title='"First Name"' />
				</div>
				<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
					<input-group :title='"Middle Name"' />
				</div>
				<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
					<input-group :title='"Last Name"' />	
				</div>
			
				<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
					<input-group :title='"User ID"' />
				</div>
				<div class='col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8'>
					<input-group :title='"Email"' />
				</div>
		
				<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
					<input-group :title='"Mobile"' />
				</div>
				<div class='col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'>
					<input-group :title='"Office"' />
				</div>
				
			</div>
		</form>
	</div>
</template>

<script>
	import inputGroup from './group.vue'
	export default {
		components: {inputGroup},
		data() {
			return {
				message: 'my vue'
			}
		}
	}
</script>
<style>

</style>
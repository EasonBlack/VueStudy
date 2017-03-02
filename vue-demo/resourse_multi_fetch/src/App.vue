<template>
	<div id="app">
		Hello {{name1}}, {{name2}}
	</div>
</template>

<script>
	export default {
	    name: 'app',
		data() {
			return {
				message: 'my vue',
				name1: '',
				name2: ''

			}
		},
		created: function() {
            Promise.all([
                this.$http.get('../data/a.json'),
                this.$http.get('../data/b.json')
            ]).then((data)=> {
               this.name1=data[0].body.name;
               this.name2=data[1].body.name;
            });
		}
	}
</script>
<style>

</style>
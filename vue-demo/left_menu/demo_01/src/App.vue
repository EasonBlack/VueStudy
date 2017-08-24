<template>
	<div class='main__container'>
        <home :menus='menus'></home>
	</div>
</template>

<script>
    import home from './home/index.vue'
	export default {
        components: {home},
		data() {
			return {
                 menus: [
                      {name: 'home', title: 'Home'},
                      {name: 'service', title: 'Service', items: [
                          {name: 'food', title: 'Food Service'},
                          {name: 'security', title: 'Security Service'},
                          {name: 'clean', title: 'Clean Service'}
                      ]}
                  ]
			}
		},
		methods: {

		},
		created:function() {

		}

	}
</script>
<style>
    .main__container {
        width:100vw;
        height:100vh;
        background-color:#EFEFEF;
        position:relative;
    }
</style>
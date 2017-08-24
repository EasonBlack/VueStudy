
<template>
	<div class='main__container'>
        <header-section class='header__section'></header-section>
        <div class='body__section'>
            <left-menu :items='menus' class='left__section'></left-menu>
            <div class='content__section'>    
            </div>
        </div>
	</div>
</template>

<script>   
    import headerSection from './header.vue';
    import leftMenu from './leftmenu.vue';
	export default {
        components: {headerSection, leftMenu},
		data() {
			return {
                 menus: [
                      {name: 'home', title: 'Home'},
                      {name: 'service', title: 'Service', items: [
                          {name: 'food', title: 'Food Service', color:'red'},
                          {name: 'security', title: 'Security Service', color: 'green'},
                          {name: 'clean', title: 'Clean Service', color: 'purple'}
                      ]},
                      {name: 'setting', title: 'Setting'},
                  ]
			}
		},
	
	}
</script>
<style >
    .main__container {
        width:100%;
        height:100%;
        position:relative;
    }
    .header__section {
        width:100%;
        height:50px;
        background-color: steelblue;
    }

    .body__section {
        width:100%;
        height: calc(100% - 50px);
        display:flex;
        position:relative;
    }
    .left__section {
        width:150px;
        height:100%;
        background-color: lightgreen;
        color:white;
    }
    
     .content__section {
        flex: 1;
        position:relative;
     }
</style>
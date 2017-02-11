<template>
	<div  class='main__container'>
        <left-menu-icon1 :menus='menus' v-if='active=="left__menu_icon_1"'></left-menu-icon1>
        <div class='content__wrapper'>
            <div v-for='i in 9' class='card__container'
            v-bind:class="{
                expand: menuActive
            }">
                <div class='card__item' @click='toggleMenu' ></div>
            </div>
        </div>
        <template v-if='active=="right__menu_1"'>
             <right-menu1 :active='menuActive'></right-menu1>
        </template>

        <div class='control__container'>
            <ul>
                <li @click='active="left__menu_icon_1"'>
                    left__menu_icon_1
                </li>
                <li @click='active="right__menu_1"'>
                    right__menu_1
                </li>
            </ul>
        </div>

	</div>

</template>

<script>
    import leftMenuIcon1 from '../left__menu_icon_1/index.vue';
    import rightMenu1 from '../right__menu_1/index.vue';
	export default {
	    components: {leftMenuIcon1, rightMenu1},
		data() {
			return {
			    active: 'left__menu_icon_1',
			    menuActive: true,
                menus : [
                    {text: 'Jenkins', src: 'Jenkins-64.png',
                     subs: [
                        {text: 'aaaa'},
                        {text: 'bbbb'},
                        {text: 'dddd'}
                     ]
                    },
                    {text: 'Tent', src: 'Dome Tent-50.png',
                     subs: [
                        {text: 'xxxx'},
                        {text: 'yyyy'},
                        {text: 'zzzz'}
                     ]},
                    {text: 'Sneeze', src: 'Sneeze-50.png',
                     subs: [
                        {text: 'iiii'},
                        {text: 'jjjj'},
                        {text: 'mmmm'}
                     ]}
                ]
			}
		},
		methods: {
		    toggleMenu: function() {
                this.menuActive = !this.menuActive;
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
    ul {
        list-style:none;
    }

    .main__container {
        height:100vh;
        width:100vw;
        background-color:#EFEFEF;
        position:relative;
        display:flex;
        overflow:hidden;
    }

    .content__wrapper {
        flex:1;
        display:flex;
        flex-wrap: wrap;
        .card__container {
            flex:1 0;
            min-width:33%;
            max-width:33%;
            display:flex;
            align-items:center;
            justify-content:center;
            transition: all 0.3s ease;
            &.expand {
                 min-width:25%;
                 max-width:25%;
            }
        }
        .card__item {
            width:100px;
            height:100px;
            background-color:steelblue;
        }
    }

    .control__container {
        position:absolute;
        top:50%;
        left: calc(50% - 100px);
        margin:auto;
        width:200px;
        height:100px;
        border: 1px solid steelblue;
    }

</style>
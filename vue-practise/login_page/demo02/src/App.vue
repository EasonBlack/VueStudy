
<template>
    <div class='app__container'>
        <app-title />
        <div class='center-box__container'>
            <sign-in-box  v-if='boxSelected=="signin"'  />
            <sign-up-box  v-if='boxSelected=="signup"' />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import signInBox from './components/login/signin.vue';
    import signUpBox from './components/login/signup.vue';
    import appTitle from './components/login/appTitle.vue';
	export default {
	    components: {signInBox, signUpBox, appTitle},
		data() {
			return {
			}
		},
		computed: {
            ...mapState({
                boxSelected: (state)=> state.login.currentLoginBox
            })
        }
	}
</script>
<style lang='scss' scoped>
    .app__container {
        background-color: #EFEEEC;
        width:100%;
        height:100%;
        overflow:hidden;
    }
    .center-box__container {
        margin: auto auto;
        top:10%;
        width:400px;
    }
</style>
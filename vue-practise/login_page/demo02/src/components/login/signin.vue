<template>
    <div class='box__container pb_50'>
        <h1>SIGN IN</h1>
        <div class='input__wrapper'>
            <input placeholder='Username' />
        </div>
        <div class='input__wrapper'>
            <input placeholder='Password'/>
        </div>
        <div class='line__wrapper mb_40'>
            <a>Forget Password?</a>
        </div>
        <div class='line__wrapper mb_20'>
            <input type='radio'  />
            <span>Remember Me</span>
        </div>
        <div class='button__wrapper mb_20'>
            <a>SIGN IN</a>
        </div>
        <div class='line__wrapper'>
            <span>Don't have an account ? </span>
            <a @click='gotoSignUp'>Sign Up</a>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            gotoSignUp() {
                this.$store.commit('setCurrentLoginBox',{name: 'signup'})
            }
        }
    }
</script>
<style lang='scss' scoped>
</style>
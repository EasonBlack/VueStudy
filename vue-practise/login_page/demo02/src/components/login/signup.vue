<template>
    <div class='box__container pb_20'>
        <h1>SIGN UP</h1>
        <div class='input__wrapper'>
            <input placeholder='Username'/>
        </div>
        <div class='input__wrapper'>
            <input placeholder='Password'/>
        </div>
        <div class='input__wrapper'>
            <input placeholder='Re Password'/>
        </div>
        <div class='input__wrapper'>
            <input placeholder='Email'/>
        </div>
        <div class='input__wrapper mb_40'>
            <input placeholder='Code'/>
            <a class='code'>GET CODE</a>
        </div>

        <div class='button__wrapper mb_20'>
            <a>SIGN UP</a>
        </div>
        <div class='line__wrapper'>
            <span>Already have an account ? </span>
            <a @click='gotoSignIn'>Sign In</a>
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
             gotoSignIn() {
                this.$store.commit('setCurrentLoginBox',{name: 'signin'})
             }
        }
    }
</script>
<style lang='scss' scoped>
</style>
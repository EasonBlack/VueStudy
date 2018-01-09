<template>
    <div class='login-container'>
        <div class='modal-dialog'>
            <div class='modal-content'>
                <div class='modal-header d-flex justify-content-center align-items-center'>
                   
                    <h5 class='modal-title'> <i class="fa fa-lock mr-2" aria-hidden="true"></i>Login</h5>
                </div>
                <div class='modal-body'>
                    <form-row :title='"Username"' >
                        <input class='form-control' v-model='username' /> 
                    </form-row>
                    <form-row :title='"Passowrd"' >
                        <input class='form-control' v-model='password' />
                    </form-row>
                    <form-row>
                        <form-check 
                        :title='"Remember my Password"' 
                        :id='"remebmer"' 
                        v-model='rememberme' />   
                    </form-row>
                    <form-row >
                        <a class='btn btn-success text-white' @click='signin'>Sign in</a>
                        <a class='btn btn-info text-white'>Reset</a>
                    </form-row>
                </div>
                <div class='modal-footer d-flex justify-content-start'>
                    <a>Forgot Password</a>
                </div>
            </div>
        </div>
    </div> 
</template> 

<script>
import formRow from '$components/form-row/index.vue';
import formCheck from '$components/form-check/index.vue';
export default { 
    components: {formRow, formCheck},
    data() {
        return {
            username: '',
            password: '',
            rememberme: true
        }
    },
    methods: {
        signin() {
            console.log(this.username, this.password, this.rememberme)
            this.$router.push('/home')
        }
    }
}
</script>

<style lang='scss' scoped>
    .login-container {
        background-color: rgba(grey, 0.5);
        display: flex;
        justify-content: center;
        padding-top:100px;
    }
    .modal-header {
        color: #333;
        background-color: #f5f5f5;
        border-color: #ddd;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
    }
    .modal-footer {
        padding: 10px 15px;
        background-color: #f5f5f5;
        border-top: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }

</style> 


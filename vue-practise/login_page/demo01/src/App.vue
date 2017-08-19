<template>
	<div class="login__container">
		<ul class='login__tab'>
		    <li @click='selectTab("login")'
		        :class='{
		            active: tab=="login"
		        }'
		    >LOGIN</li>
		    <li @click='selectTab("register")'
		         :class='{
                    active : tab=="register"
                 }'
		    >REGISTER</li>
		</ul>
		<div class='login__box'>
		    <div class='login__login' v-if='tab=="login"'>
                <div class='row'>
                    <whole-row-input :icon='"icon-calendar"' :placeholder='"UserName"' ></whole-row-input>
                </div>
                <div class='row'>
                    <whole-row-input  :icon='"icon-calendar"' :placeholder='"Password"'></whole-row-input>
                </div>
                <div class='row'>
                    <a  class='btn__row btn__blue'>Login</a>
                </div>
		    </div>
		    <div class='login__login' v-if='tab=="register"'>
		        <div class='row'>
                    <form-row-input :title='"Email"' :w='"35%"'>
                        <input></input>
                    </form-row-input>
		        </div>
		        <div class='row'>
		            <form-row-input :title='"Password"' :w='"35%"' >
                        <input></input>
                    </form-row-input>
		        </div>
		        <div class='row'>
		             <form-row-input :title='"Re Password"' :w='"35%"'>
                        <input></input>
                    </form-row-input>
		        </div>

		        <div class='row'>
		            <form-row-input :title='"Code"' :w='"35%"' class='form__code'>

                            <input ></input>
                            <a>Get Code</a>

                    </form-row-input>
		        </div>
		        <div class='row'>
		            <a>Confirm</a>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
    import wholeRowInput from './wholeRowInput.vue';
    import formRowInput from './formRowInput.vue';
	export default {
	    components: {wholeRowInput, formRowInput},
	    name: 'app',
		data() {
			return {
			    tab: 'register'
			}
		},
		methods: {
		    selectTab(name) {
		        this.tab = name;
		    }
		}
	}
</script>
<style lang='scss' scoped>
    .login__container {
        position:absolute;
        width:50vw;
        height:auto;
        top: calc(50vh - 25vh);
        left: calc(50vw - 25vw);
        border: 2px solid #ccc;
    }
    .login__tab {
        height:50px;
        width:100%;
        display:flex;
        li {
            width:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            color: steelblue;
            border-bottom: 2px solid #ccc;
            &.active {
                 border-bottom: 2px solid steelblue;
            }
        }
    }

    .login__box {
        padding-top:50px;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;

        width:50%;
        margin:auto;
    }

    .row {
        width:100%;
        height:40px;
        margin-bottom:10px;
    }
    .btn__row {
        display:inline-block;
        width:100%;
        height:30px;
        line-height:30px;
        text-align: center;
        border-radius:5px;
    }
    .btn__blue {
        background-color:steelblue;
        color:white;
    }
    .form__code {
        input {
            //top: -2px;
            width:40%;
        }
        a {
            width:80px;
            text-align:center;
            height:30px;
            line-height:30px;
            background-color:grey;
            display: inline-block;
            font-size:15px;
            vertical-align: top;
        }
    }

</style>
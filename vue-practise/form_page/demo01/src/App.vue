<template>
	<div class="login__container">

		<div class='login__box'>

		    <div class='login__login' >
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
		             <form-row-input :title='"City"' :title2='"State"' :w='"35%"'>
                        <input></input>
                        <input slot='input2'></input>
                    </form-row-input>
		        </div>

		        <div class='row'>
		            <form-row-input :title='"Code"' :w='"35%"' class='form__code'>
                            <input ></input>
                            <a>Get Code</a>
                    </form-row-input>
		        </div>
		        <div class='row'>
		            <div class='ml-35'>
		                <input type=checkbox />
		                <span>aaaaaa aaaaaa aaaaaa</span>
		            </div>
                </div>
		        <div class='row'>
		            <a class='ml-35 btn__confirm'>Confirm</a>
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
    import formRowInput from './formRowInput.vue';
	export default {
	    components: { formRowInput},
		data() {
			return {

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
            width:40% !important;
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
    .ml-35 {
        margin-left:35%;
    }

    .btn__confirm {
         display:inline-block;
         width:120px;
         height:30px;
         line-height:30px;
         text-align: center;
         border-radius:5px;
         background-color:steelblue;
         color:white;
    }

</style>
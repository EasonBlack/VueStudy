<template>
    <div class='app__container'>
		<div v-if='message' class='message__wrapper'>
        	<h2>{{message}}</h2>
		</div>
		<div class='fullscreenDiv' v-else >
			<div class='loader'></div>
		</div>
    </div>
</template>

<script>

	export default {
		data() {
			return {
				message: ''	
			}
		},
		beforeRouteEnter (to, from, next) {
			console.log(to, from);
			if(true) {
				next(vm => {
					setTimeout(()=>{
						vm.message = 'xxxxx'
					},3000)
				})
			} else {
				next(from)
			}
			
		}
	}

</script>
<style lang='scss' scoped>
	.app__container {
		width:100%;
		height:100%;
	}
	.message__wrapper {
		width:100%;
		height:100%;
		display:flex;
		justify-content:center;
		align-items:center;
	}

  	.fullscreenDiv {
      width: 100%;
      height: 100%;
	  display:flex;
	  justify-content:center;
	  align-items:center;
    }
    
    .loader {
      border: 10px solid #f3f3f3;
      border-radius: 50%;
      border-top: 10px solid #2cb8b1;
      width: 50px;
      height: 50px;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
</style>
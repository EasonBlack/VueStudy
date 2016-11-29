<template>
    <transition  name='loader-fade'>
        <div v-if='active' class='loader'>
            Calculating...
        </div>
    </transition >

</template>
<script>
     export default{
            props: ['active'],
    		data() {
    			return {
    			}
    		},
    		watch:  {
    		    active:function(val, oldval) {
    		        if(val!=oldval && val){
    		            setTimeout(()=>{
    		                this.$emit('fade');
    		            },3000)

    		        }
    		    }
    		}
        }
</script>
<style>
    .loader {
        width:300px;
        height:100px;
        line-height:100px;
        position:fixed;
        display:block;
        border-radius: 10px;
        background-color:#dddddd;
        color: black;
        font-size:1.2em;
        top:40%;
        left: calc(50vw - 150px);
        text-align:center;
        transition: opacity .5s;

    }

    .loader-fade-active, .loader-fade-active {
    }
    .loader-fade-enter, .loader-fade-leave-active {
        opacity: 0
    }
</style>
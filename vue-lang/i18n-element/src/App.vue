<template>
	<div  class='main__container'>
        <div>
            <el-date-picker  v-model='myDate' />        
        </div>
        <div>
            <button @click='toggle'>Toggle</button>
        </div>
	</div>

</template>

<script>
    import Vue from 'vue'
	export default {
		data() {
			return {
                myDate :null
			}
		},
		methods: {
            toggle() {
                 this.$i18n.locale = this.$i18n.locale == 'zh'? 'en': 'zh'
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



</style>
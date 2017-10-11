
<template>
	<div  class='main__container'>
        {{ $t("message") }}
       
        <div class='panel__container'>
            <a @click='toggleLang'>Set</a>
            <ul v-if='showLanSet'>
                <li v-for='lan in langs' @click='setLang(lan.id)'>
                    <span class="flag-icon flag-icon-squared"
                    :class='["flag-icon-"+lan.id]'>
                    </span>
                    <div>{{lan.title}}</div>
                </li>
            </ul>
        </div>
	</div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
	export default {
		data() {
			return {
                showLanSet: false,
                langs: [
                    {id: 'us', title: 'American'},
                    {id: 'cn', title: 'Chinese'},
                ]
			}
        },
        created() {
            this.setLang('cn');
        },
		methods: {
            toggleLang() {
                this.showLanSet = !this.showLanSet
            },
            setLang(lan) {  
                if(Object.keys(this.$i18n.messages).indexOf(lan)!=-1){
                     this.$i18n.locale = lan;
                }  else {
                    axios.get(`../data/${lan}.json`)
                    .then(res=>{
                        this.$i18n.setLocaleMessage(lan, res.data);
                        this.$i18n.locale = lan;
                        this.$forceUpdate()          
                        console.log(this.$i18n.getLocaleMessage(lan))      
                    
                    })
                }
                 
              
                
            }
		}
	}
</script>
<style lang='scss'>
    @import './App.scss';
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
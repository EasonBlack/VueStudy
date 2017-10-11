<i18n>
{
  "us": {
    "hello": "hello world!"
  },
  "cn": {
    "hello": "世界！"
  }
}
</i18n>

<template>
	<div  class='main__container'>
        {{ $t("hello") }}
        {{ $t("help.xxx") }}
        {{ $t("info") }}
       
        <div class='panel__container'>
            <a @click='toggleLang'>Set</a>
            <ul v-if='showLanSet'>
                <li v-for='lan in langs' @click='setLang(lan)'>
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
          console.log(this.$i18n);
        },
		methods: {
            toggleLang() {
                this.showLanSet = !this.showLanSet
            },
            setLang(lan) {  
                this.$root.setLan(lan.id);        
                // this.$i18n.locale = lan.id;
                // this.$i18n._root.locale = lan.id;
                // console.log(this.$i18n);
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
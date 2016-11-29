<template>
    <div>
        <page-title :title="'Title'" v-on:titleEvent='showSection'>
            <span class='glyphicon glyphicon-arrow-left' slot="left" v-on:click='left'></span>
            <span class='glyphicon glyphicon-wrench' slot="right" v-on:click='right'></span>
        </page-title>
        <header-drop-down :items='items' :active='sectionActive'></header-drop-down>
        This is Home
        <div class='content'>
            <app-checkbox v-on:checkEvent='showLoader'></app-checkbox>
        </div>
        <app-loader :active='loaderActive' v-on:fade='fadeLoader'></app-loader>
        <router-link to="/detail">Go to Detail</router-link>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import pageTitle from '../../common/page-title.vue';
    import pageFooter from '../../common/page-footer.vue';
    import appCheckbox from '../../common/app-checkbox.vue';
    import appLoader from '../../common/app-loader.vue';
    import headerDropDown from './HeaderDropDown.vue';
    export default{
       components: {pageTitle, pageFooter, headerDropDown, appCheckbox, appLoader},
       data: function(){
            return {
                sectionActive:false,
                loaderActive:false,
                items: [
                    {title:'aaaaaa'},
                    {title:'bbbbbb'},
                    {title:'cccccc'}
                ]

            }
       },
       methods: {
          showSection: function() {
            this.sectionActive = !this.sectionActive ;
          },
          left:function() {
            alert('left')
          },
          right:function(){
            alert('right');
          },
          showLoader:function() {
            this.loaderActive = true;
          },
          fadeLoader: function() {
            this.loaderActive = false;
          }
       }
    }
</script>

<style scoped>
    .content {
        margin-top:80px;
    }
</style>

<template>
    <div class='main__container'>
        <div class='header__section'>
            <header-section></header-section>
        </div>
        <div class='body__section'>
            <div class='left__section'>
                <left-menu :items='menus'></left-menu>
            </div>
            <div class='content__section'>
                <content-section></content-section>
            </div>
        </div>
    </div>
</template>

<script>
    import headerSection from './header.vue';
    import contentSection from './content.vue';
    import leftMenu from './left-menu/index.vue';
    export default{
        components: {headerSection, contentSection, leftMenu},
        data(){
            return{
                leftMenuFull: false,
                leftMenuExpand: false,
                menus: [
                    {name: 'home', title: 'Home'},
                    {name: 'about', title: 'About'},
                    {name: 'service', title: 'Service', items: [
                        {name: 'food', title: 'Food Service'},
                        {name: 'security', title: 'Security Service'},
                        {name: 'clean', title: 'Clean Service'}
                    ]},
                    {name: 'contact', title: 'Contact'}
                ]
            }
        }

    }
</script>

<style lang='scss' scoped>
    $headerHeight: 50px;
    .main__container {
        width:100%;
        height:100%;
        position:relative;
    }
    .header__section {
        width:100%;
        height: #{$headerHeight};
        position:relative;
    }


    .body__section {
        width:100%;
        height: calc(100% - #{$headerHeight} );
        display:flex;
        position:relative;
    }

     .left__section {

     }
     .content__section {
        flex: 1;
        position:relative;
     }
</style>

<template>
    <div class='home__container'
        :style="{
            backgroundImage: 'url(' + bgcImageBase + currentBgcImage + ')'
        }">
        <home-nav :items='homeItems' v-if='homeItems && homeItems.length'
                    v-on:getCurrentNav='getCurrentNav'
        ></home-nav>
        <home-cards :items='cards'></home-cards>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex'
    import homeNav from './homeNav.vue';
    import homeCards from './homeCards.vue';
    export default{
        components: {homeNav, homeCards},
        data(){
            return{
                bgcImageBase: "../../../assets/home/",
                currentBgcImage: "Home_Recommend.jpg"
            }
        },
        beforeCreate:function() {
            this.$store.dispatch('fetchHomeNav');
            this.$store.dispatch('fetchHomeCard');
        },
        methods: {
            getCurrentNav :function(obj) {
                console.log(obj);
                this.currentBgcImage = this.homeItems.find(h=>h.id == obj.val).background;
            }
        },
        computed:{
            ...mapState({
                homeItems: (state) => {
                    return state.homeItems;
                },
                cards: (state) => {
                    return state.cards;
                }
            }),

        }
    }
</script>


<style lang='scss' scoped>
    .home__container {
        width:100%;
        height:100%;
        overflow:auto;
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>
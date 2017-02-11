<template>
    <div>
       <img src='../../../assets/spinner.gif' v-if='!mydata.length'  />
       <ul v-if='mydata.length'>
           <li v-for='item in mydata'>
             {{item.name}}
           </li>
       </ul>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
    export default{
        data(){
            return{

            }
        },
        created: function() {
           this.$store.dispatch('fetchData');
        },
        computed:{
           ...mapState({
               mydata: (state) => {
                   return state.data.all;
               }
           })
        }
    }
</script>

<style lang='scss' scoped>

</style>

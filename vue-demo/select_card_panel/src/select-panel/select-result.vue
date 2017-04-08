<template>
    <div class='active__container'>
         <div class='row'>
            <label>{{orgSpec.title}}</label><button @click='edit'>Edit</button>
         </div>
         <div>
            <div class='row child__wrapper' v-for='item in orgSpec.items' v-if='item.selected'>
                 <div class='child__item'>{{item.title}}</div>
                 <ul>
                    <li v-for='child in item.items' v-if='child.selected'>{{child.title}}</li>
                 </ul>
            </div>

         </div>
    </div>
</template>

<script>
    import bus from '../bus.js';
    export default{
        props:['results','orgs', 'index'],
        data(){
            return{
                result : this.results[this.index]
            }
        },
        methods: {
            edit() {
                bus.$emit('editSelect', {index: this.index, org: this.orgSpec.name })
            }
        },
        computed: {
            orgSpec() {
                return this.orgs.find(o=> o.name == this.result.name)
            }
        }
    }
</script>

<style lang='scss' scoped>
     .result__container {
            position:relative;
            width:100%;
            height:auto;
     }
     .child__wrapper {
        display:flex;
        .child__item {
            width:100px;
        }
        ul {
            li {
                display:inline-block;
            }
        }
     }

</style>
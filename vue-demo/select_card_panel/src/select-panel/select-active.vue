<template>
    <div class='active__container'>
        <div class='row'>
            <select v-model='selectOrg'>
                <option v-for='o in orgsFilter' :value='o'>{{o.title}}</option>
            </select>
        </div>
        <div class='orgchild__container'>
            <template v-if='selectOrg' >
                <div  class='row  orgchild__wrapper' v-for='item in selectOrg.items'  >
                     <div class='orgchild__item'><input type='checkbox' v-model='item.selected' @click='checkHandle(item)' /><label>{{item.title}}</label></div>
                     <ul class='orgchildchild__container'>
                        <li v-for='child in item.items' class='orgchildchild__wrapper'>
                           <input type='checkbox'  v-model='child.selected' @click='checkHandle(child)'
                           :disabled="item.selected ? false: true" />
                           <label>{{child.title}}</label>
                        </li>
                     </ul>
                </div>
            </template>
        </div>
        <div class='row button__container'>
            <button @click='save'>Save</button>
        </div>
    </div>
</template>

<script>
    import bus from '../bus.js';
    export default{
        props: ['results', 'orgs', 'index'],
        data(){
            return{
                selectOrg: null,
                result: this.results[this.index]
            }
        },
        created() {
            if(this.results[this.index].name) {
                this.selectOrg = this.orgs.find(o=>o.name == this.results[this.index].name)
            }
        },
        methods: {
            checkHandle(item) {
                if(!item.selected) {
                    this.$set(item, 'selected' , true);
                } else {
                    this.$set(item, 'selected' , false);
                }
            },
            save() {
                 bus.$emit('saveSelect', {index: this.index, org: this.selectOrg.name })
            }
        },
        computed: {
            orgsFilter() {
                let orgs = this.results.map((o, i)=> {
                    if(i==this.index) return;
                    return o.name
                })
                return this.orgs.filter(o=> !o.selected && orgs.indexOf(o.name)==-1 )
            }
        }
    }
</script>

<style lang='scss' scoped>
    .active__container {
        position:relative;
        width:100%;
        height:auto;
    }
    .orgchild__container {
        display:flex;
        flex-direction:column;
    }
    .orgchild__wrapper {
        height:20px;
        line-height:20px;
        display:flex;
        position:relative;
    }
    .orgchild__item {
        width:30%;
    }
    .orgchildchild__container {
        display:flex;
        li {
            display:inline-block;
        }
    }
    .button__container {
        width:50px;
        display:block;
        padding:10px 15px;
    }
</style>
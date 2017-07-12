<template>
    <div class="item__container">
         <div class="parent__wrapper">
            <div class='parent__title'>
                <div class="ckcomponent">
                    <input :id="'ck_'+ item.id" class='ckcomponent__input' type="checkbox"  v-model='item.checked'/>
                    <label  :for="'ck_'+ item.id" class="ckcomponent__label" />
                </div>
                {{item.title}}
            </div>
            <div class='parent__icon'>
                <div  class='arrow__wrapper'>
                    <span class="arrow down"  @click='expand'
                        :class='{
                            up: isExpand
                        }'
                     v-if='item.items'>
                     </span>
                </div>

            </div>
         </div>
         <div class="children__wrapper" v-show="isExpand">
               <item-wrapper v-for="t in item.items" :item="t" :key='t'></item-wrapper>
         </div>
    </div>
</template>
<script>
    export default {
        name: 'item-wrapper',
        props: ['item'],
        components: {
            'item-wrapper': this
        },
        data(){
            return{
                isExpand: true
            }
        },
        methods: {
            expand() {
                this.isExpand= !this.isExpand;
            }
        }
    }
</script>
<style lang='scss' scoped>
    .item__container {
        width: 100%;
        padding: 10px 20px;
    }
    .parent__wrapper {
        width:100%;
        height:25px;
        display:flex;
        align-items:center;
    }
    .parent__title {
        flex:1;
        display:flex;
    }
    .parent__icon {
        width:12px;
        height:12px;
        position:relative;
    }
    .children__wrapper {
        padding-left:20px;
    }
    .item-icon {
        display:none;
    }
    .icon-haschild {
        display: inline-block;
    }

    .arrow__wrapper {
        width:100%;
        height:100%;
        position:relative;
    }
    .arrow {
        position:absolute;
        top:0;
        left:0;
        display: block;
        width:100%;
        height:100%;
        border-bottom:3px solid black;
        border-right:3px solid black;
        transition:all 0.1s ease;
    }
    .down {
        top:-5px;
        transform: rotate(45deg);
    }
    .up {
         top:0px;
        transform: rotate(225deg);
    }

    .ckcomponent {
        margin-right:10px;
    }
    .ckcomponent__label {
        position:relative;
         width: 18px;
         height: 18px;

         border:1px solid  steelblue;
         display: inline-block;
         background-color:white;
         transition:  background-color .3s ease;
     }

     .ckcomponent__input {
         display:none;
     }

     .ckcomponent__label:before {
         content: '';
         position:absolute;
         top:2px;
         left: 5px;
         width:5px;
         height:10px;
         border-bottom: 1px solid white;
         border-right: 1px solid white;
         transition:transform 0.3s ease;
         transform: rotate(45deg) scale(0);
     }
     .ckcomponent__input:checked  + .ckcomponent__label {
         background-color: steelblue;
     }
     .ckcomponent__input:checked  + .ckcomponent__label:before {
         transform: rotate(45deg) scale(1);
     }
</style>
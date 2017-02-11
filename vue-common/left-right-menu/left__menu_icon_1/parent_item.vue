<template>
    <li class='parent-item__container' @mouseover='subActive=true' @mouseleave="subActive = false">
        <div class='image__container'><img :src="'/icons/' + menu.src" /></div>
        <label>{{menu.text}}</label>
        <template v-if='menu.subs && menu.subs.length'>
            <sub-list :subs='menu.subs' :active='subActive'></sub-list>
        </template>
    </li>
</template>
<script>
    import subList from './sub_list.vue';
    export default {
        components: {subList},
        props: ['menu'],
        data() {
            return {
                subActive: false
            }
        },
        methods: {

        }
    }
</script>
<style lang='scss' scoped>
    .parent-item__container {
        margin-bottom:10px;
        text-align: center;
        cursor: pointer;
        padding: 5px 0px;
        position:relative;
        label {
            font-size:0.8em;
            display:inline-block;
        }
        &:hover {
            background-color: rgba(black, 0.9);
        }
    }
    .image__container {
        justify-content:center;
        position:relative;
        z-index:100;
         img {
             display:block;
             width: 80%;
             margin: auto auto;
             margin-bottom:5px;
         }
    }
</style>
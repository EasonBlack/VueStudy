<template>
    <div class='panel__container'>
        <ul>
            <li v-for='item in items' @click='setBg(item)'>
                <img :src='"../../assets/" + item'/>
            </li>
        </ul>
    </div>
</template>

<script>

    export default{
        props: ['items'],
        data(){
            return{

            }
        },
        methods: {
            setBg(item) {
                this.$emit('setBg', item )
            }
        }

    }
</script>

<style lang='scss' scoped>
    .panel__container {
        poistion:abosolute;
        top:10px;
        left:10px;
        width:80%;
        height:80%;

        ul {
            display:flex;
            flex-wrap: wrap;

            li {
                img {
                    width:100px;
                }
            }
        }
    }
</style>

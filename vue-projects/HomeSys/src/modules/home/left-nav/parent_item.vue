<template>
    <li class='parent-item__container flex__column flex__center'
        :type='menu.name'

        @click='activeMenu(menu.name)'
       >
        <div class='menu__wrapper'
         v-bind:class="{
            active: activeName==menu.name
        }">
            <label>{{menu.title}}</label>
         </div>
    </li>
</template>

<script>
    export default {
        props: ['menu', 'activeName' ],
        data() {
            return {
                subActiveName: ''
            }
        },
        methods: {
            activeMenu: function(name) {
                this.$emit('activeMenu', this.menu.name);
                this.$router.push(`/${name}`)
            }
        }
    }
</script>
<style lang='scss' scoped>
    .parent-item__container {
        cursor: pointer;
        height:100px;

        position:relative;
        z-index:15;
        &:hover label{
            color: #3BAA98;
        }

        .menu__wrapper {
            background-color: #213242;
            z-index:40;
            width: 100%;
            height:100%;
            display: flex;
            align-items: center;
            &.active {
                background-color: #3BAA98;
                label {
                    color: white;
                }
            }
        }
        label {
            font-size:0.8em;
            display:inline-block;
            width: 100%;
            text-align: center;
            z-index: 35;
        }
    }

    .image__container {
        position:relative;
        z-index:100;
        width: 100%;
        height:70%;

    }


</style>
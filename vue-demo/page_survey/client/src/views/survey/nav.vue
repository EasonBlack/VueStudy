<template>
    <div class='nav__container'>

        <ul class='num__container'>
            <li>
                <a class='nav__button quit__button'   @click='quit'>
                    Quit
                </a>
            </li>
            <li v-for='i in count'>
                <a
                v-bind:class="{
                    link : i != count
                }"
                >{{i}}</a>
            </li>
            <li>
                <a class='nav__button save__button'   @click='submit'>
                    Submit
                </a>
            </li>
        </ul>


    </div>
</template>

<script>

    export default{
        props: ['count', 'current'],
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods: {
            quit: function() {
                this.$emit('openQuitMessage');
            },
            submit: function() {
                this.$emit('submitHandle');
            }
        }
    }
</script>

<style lang='scss' scoped>
    .nav__container {
        width:100%;
        display:flex;

    }

    .save__button {
        background-color:lightcoral;
        color:white;
    }
    .quit__button {
        background-color: lightgreen;
        color:white;
    }
    .num__container {
        flex:1;
        display:flex;
        li {
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            .line__container {
                position:relative;
                flex:1;
                display:flex;
                align-items: center;
                height:100%;
                padding-left: 10%;
            }
            .line {
                width:60%;
                height:1px;
                border-top: 1px dotted #41A160;
            }
            a {
                position:relative;
                display:flex;
                color:white;
                background-color: #41A160;
                width:40px;
                height:40px;
                border-radius: 50%;
                justify-content: center;
                align-items: center;

                &.link:after {
                    position:absolute;
                    content: '';
                    background: url(../../assets/more.png);
                    top: -11px;
                    left: 150%;
                    width: 400%;
                    background-repeat: repeat-x;
                    height: 50px
                }
            }
        }

    }
</style>

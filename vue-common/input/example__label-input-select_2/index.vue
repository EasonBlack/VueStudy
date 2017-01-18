<template>
    <div class='row__container'>
        <div class='left' >
            <label>{{title}} :</label>
        </div>
        <div class='right'>
            <input type='text' :value="value" @input="$emit('input', $event.target.value)"  />
            <img src='../../../assets/icons/plus_black.png' v-on:click='showList' />
            <transition  name="listshow">
                <ul class='list__container' v-if='show'>
                    <li v-for='m in list' v-on:click='setInput(m)'>{{m}}</li>
                </ul>
            </transition >
        </div>
    </div>
</template>

<script>

    export default{
        props: ['title', 'value'],
        data(){
            return{
                show: false,
                list : [
                    'aaaa aaa aaa',
                    'bbbb bbb bbb',
                    'cccc ccc ccc',
                    'dddd ddd ddd'
                ]
            }
        },
        methods: {
            showList: function() {
                this.show = !this.show;
            },
            setInput: function(m) {
                this.$emit('input', m)
                this.show = false;
            }
        }


    }
</script>

<style lang='scss' scoped>
    .row__container {
        width:100%;
        height: 100%;
        display:flex;
        position:relative;
        .left {
            padding:0 20px;
            flex:0 0 33%;
            display:flex;
            align-items:center;
            justify-content: flex-end;
            box-sizing: border-box;
        }
        .right {
            flex:2;
            position:relative;

            input[type=text] {
                outline:medium;
                width:100%;
                height:100%;
                padding:0px 20px;
            }
            img {
                width:30px;
                height:30px;
                position:absolute;
                top:calc( 50% - 15px );
                right:-33px;
                bottom:0;
            }
            .list__container {
                position:absolute;
                width:100%;
                top:100%;
                left:0;
                list-style:none;
                background-color:white;
                border: 1px solid rgba(grey, 0.5);
                border-top:none;
                z-index:10;
                overflow:hidden;

                li {
                    width:100%;
                    padding:5px 10px;
                    &:hover {
                        background-color:steelblue;
                        color:white;
                    }
                }
            }
        }

        .listshow-enter-active {
            max-height:500px;
            transition: max-height 1s ease-in;
        }
        .listshow-leave {
            max-height:500px;
        }
        .listshow-enter {
            max-height:0;
        }
        .listshow-leave-active {
            max-height:0;
            transition: max-height 0.15s ease-out;
        }


    }
</style>

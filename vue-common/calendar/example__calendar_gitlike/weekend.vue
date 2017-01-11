<template>
    <div class='weekend__container'>
        <ul>
            <li v-for='w in week'>
                {{w}}
            </li>
        </ul>
    </div>
</template>

<script>
    import moment from 'moment';
    export default{
        props: ['startDate'],
        data(){
            return {

            }
        },
        computed: {
            'week' : function() {
                let w = [];
                for(let i=0;i<7;i++) {
                    w.push(moment(this.startDate).add(i,'day').format('ddd'))
                }
                return w;
            }
        }
    }
</script>

<style lang='scss' scoped>
    .weekend__container {
        position:absolute;
        top:0;
        left:-20px;
        width:20px;
        height:70px;

        ul {
            list-style:none;
        }
        li {
            font-size:0.1em;
            height: 10px;
            transform: scale(0.7)
        }
    }
</style>

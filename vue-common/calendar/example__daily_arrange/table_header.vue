<template>
    <thead class='thead__container'>
        <tr>
            <th rowspan="2" style='width:80px;'>Time</th>
            <th v-for="t in times" colspan='2'>{{t}}</th>
        </tr>
        <tr class='child__cell'>
            <th v-for='i in timecount'></th>
        </tr>
    </thead>
</template>

<script>
    import moment from 'moment';
    export default{
        props: ['start', 'end'],
        data(){
            return{
            }
        },
        created: function() {
        },
        computed: {
            times: function() {
                let _times = [];
                for(let i=800;i<this.end;i=i+100) {
                    let _t = i<1000 ? '0'+i : i;
                    _times.push(_t);
                }
                return _times;
            },
            timecount: function() {
                return this.times.length * 2;
            }
        }
    }

</script>


<style scoped lang='scss'>
    .thead__container {
        background-color:white;
        th {
            border-top: 0.5px solid rgba(grey, 0.5);
            border-left: 0.5px solid rgba(grey, 0.5);
            width:20px;
            height: 20px;
            font-size: 0.9em;
            font-weight: 500;

        }
        .child__cell {
            th {
               &:nth-child(odd) {
                   border-left: 0.5px solid rgba(grey, 0.5);
               }
               &:nth-child(even) {
                   border-left: 0.5px dotted rgba(grey, 0.5);
               }
            }
        }
    }
</style>
<template>
    <thead class='thead__container'>
    <tr>
        <th rowspan="2" style='width:80px;'>Name</th>
        <th :colspan="m.num" v-for='m in months'>{{m.text}}</th>
    </tr>
    <tr>
        <template v-for='m in months'>
            <th v-for='i in m.num'>{{i}}</th>
        </template>
    </tr>
    </thead>
</template>

<script>
    import moment from 'moment';
    export default{
        props: ['start', 'end'],
        data(){
            return{
                monthNum: 0,
                startMonth: 0,
                endMonth:0,
                months: []
            }
        },
        created: function() {
            let _start = moment(this.start);
            let _end = moment(this.end);
            this.startMonth = _start.month();
            this.endMonth =_end.month();
            this.monthNum = _end.diff(_start, 'month') + 1;
            for(let i=0;i<this.monthNum;i++) {
                this.months.push({num: moment(this.start).add(i, 'month').endOf('month').date(), text: moment(this.start).add(i, 'month').format('YYYY-MM')});
            }
        },


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
    }
</style>
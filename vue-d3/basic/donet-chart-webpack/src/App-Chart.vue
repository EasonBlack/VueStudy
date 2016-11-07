<template>
    <div class="chart__container">
        <svg height="400" width="400">
            <g transform='translate(200,200)'>
                <g class="arc" v-for="month in recodeMonths(months)">
                    <path :d="recodeD(month)" :fill="recodeColor(month.data)"></path>
                </g>
                <text dy=".3em" text-anchor="middle">xxxx xxx</text>
            </g>
        </svg>
    </div>
</template>
<style>

</style>
<script>
    import * as d3 from "d3";

    let innerR = 150;
    let outerR = 200

    let arc = d3.arc()
        .innerRadius(innerR)
        .outerRadius(outerR);

    let pie = d3.pie()
        .value(function (d) {
            return d
        });

    let color = d3.scaleOrdinal()
        .range(['#03D073', '#1798D2', '#F1D8F6'])


    export default{
        name: 'chart',
        props: ['months'],
        data () {
          return {
            innerR: 150,
            outerR: 200
          }
        },
        methods: {
           recodeMonths: (months)=> {
               return pie(months);
           },
           recodeD: (d)=> {
               return arc(d);
           },
           recodeColor: (d)=> {
               return color(d);
           }
        }
    }



</script>

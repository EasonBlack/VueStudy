let innerR = 150;
let outerR = 200

var arc = d3.arc()
    .innerRadius(innerR)
    .outerRadius(outerR);

var pie = d3.pie()
    .value(function (d) {
        return d
    });

var color = d3.scaleOrdinal()
    .range(['#03D073', '#1798D2', '#F1D8F6'])


Vue.component('app-chart', {
    props: ['months'],
    template: `<div class="chart__container">
           <svg height="400" width="400">
               <g transform='translate(${outerR},${outerR})'>
                   <g class="arc" v-for="month in recodeMonths(months)">
                       <path :d="recodeD(month)" :fill="recodeColor(month.data)" ></path>
                    </g>
                </g>
            </svg>
        </div>`,
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
})
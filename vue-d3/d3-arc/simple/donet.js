let innerR = 150;
let outerR = 200



Vue.component('app-chart', {
    props: ['months'],
    template: `<div class="chart__container">
           <svg height="200" width="200" viewBox="0 0 400 400">
              <g transform='translate(${outerR},${outerR})' id="donut_g">
               </g>
            </svg>
        </div>`,
    created: function() {

        this.myArc = d3.arc()
            .innerRadius(innerR)
            .outerRadius(outerR);

        this.pie = d3.pie()
            .sort(null)
            .value(function (d) {
                return d
            });

        this.color = d3.scaleOrdinal()
            .range(['#03D073', '#1798D2', '#F1D8F6'])

        this.arcTween = (a)=> {
            var startAngle = a.startAngle; //<-- keep reference to start angle
            var i = d3.interpolate(a.startAngle, a.endAngle); //<-- interpolate start to end
            return (t)=> {
                return this.myArc({ //<-- return arc at each iteration from start to interpolate end
                    startAngle: startAngle,
                    endAngle: i(t)
                });
            };
        }

    },
    methods: {

    },
    mounted: function() {
        console.log(this.pie(this.months));

        var mySvg = d3.select('g#donut_g')
            .selectAll("path.slice")
            .data(this.pie(this.months))
            .enter()

            mySvg.append("path")
            .attr('class', 'slice')
            .attr('id',  function(d,i) { return "myArc_"+i; })
            .attr("fill", (d, i)=> {
                return this.color(i);
            })
            .transition()
            .delay(function(d, i) {
                return i * 500;
            })
            .duration(500)
            .attrTween("d", this.arcTween)

            setTimeout(()=> {
                mySvg.append("text")
                    .attr("dy", 35)
                    .attr('x',10)
                    .append("textPath")
                    .attr('stroke', 'black')
                    .attr("xlink:href",function(d,i){return "#myArc_"+i;})
                    .text(function(d){return d.data;});
            }, 2000)


    }
})
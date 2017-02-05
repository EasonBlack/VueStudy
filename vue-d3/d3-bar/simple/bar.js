

// var margin = {top: 20, right: 20, bottom: 70, left: 40},
//     width = 600 - margin.left - margin.right,
//     height = 300 - margin.top - margin.bottom;

Vue.component('app-chart', {
    props: ['months'],
    data: function() {
        return {
            margin: {
                top:20,
                right:20,
                bottom:30,
                left:50
            },
            viewWidth: 420,
            viewHeight:420
        }
    },
    template: `<div class="chart__container">
           <svg height="200" width="200" :viewBox="'0 0 ' + viewWidth + ' ' +viewHeight">
              <g  id="bar_g" :transform="'translate('+ margin.left+','+ margin.top+')'">
               </g>
            </svg>
        </div>`,
    created: function() {
        let _width = this.viewWidth - this.margin.left - this.margin.right;
        let _height = this.viewHeight - this.margin.top - this.margin.bottom;
        this.height = _height;
        console.log(this.months.length-1);

        this.x = d3.scaleBand()
            .domain(this.months)
            .rangeRound([0, _width])
            .padding(0.21)

        this.y = d3.scaleLinear().rangeRound([_height, 0])
            .domain([0, d3.max(this.months)+20]);

        console.log(this.x(0),this.x(1),this.x(2));
    },
    methods: {

    },
    mounted: function() {
        let mySvg = d3.select('g#bar_g')
            .selectAll("rect.bar")
            .data(this.months)
            .enter()

        mySvg.append('rect')
            .style("fill", "steelblue")
            .attr("x", (d,i) => { return this.x(d); })
            .attr("width",  this.x.bandwidth())
            .attr("y", (d)=> {
                console.log(this.y(d))
                return this.y(d);
            })
            .attr("height", (d) => { return this.height - this.y(d); });

        let g = d3.select('g#bar_g');
        let _h = parseInt(this.height) + 5.0
        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + _h + ")")
            .call(d3.axisBottom(this.x));


        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(this.y).ticks(5))
            .append("text");



    }
})
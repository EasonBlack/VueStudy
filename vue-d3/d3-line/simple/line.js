



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
              <g  id="line_g" :transform="'translate('+ margin.left+','+ margin.top+')'">
               </g>
            </svg>
        </div>`,
    created: function() {
        let _width = this.viewWidth - this.margin.left - this.margin.right;
        let _height = this.viewHeight - this.margin.top - this.margin.bottom;
        this.height = _height;

        this.x = d3.scaleLinear()
            .domain([1, this.months.length])
            .rangeRound([0, _width])

        this.y = d3.scaleLinear().rangeRound([_height, 0])
            .domain([0, d3.max(this.months)+20]);

        this.line = d3.line()
            .x((d, i) => { return this.x(i + 1); })
            .y((d) => { return this.y(d); });

        this.customYAxis = (g) => {
            g.call(d3.axisLeft(this.y).ticks(5));
            g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#777").attr("stroke-dasharray", "15,15").attr('x2', _width);
            g.selectAll(".tick text").attr("x", 4).attr("dy", -4);
        }


    },
    methods: {

    },
    mounted: function() {
        let mySvg = d3.select('g#line_g')

        mySvg.append("path")
            .datum(this.months)
            .attr("class", "line")
            .attr("d", (d)=> {   return this.line(d); })
            .attr('stroke', 'blue')
            .attr('stroke-width', 2)
            .attr('fill', 'none');

        mySvg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3.axisBottom(this.x).ticks(2));

        mySvg.append("g")
            .attr("class", "axis axis--y")
            .call(this.customYAxis)


    }
})
Vue.component('app-svg', {
    props: [],
    template: `
        <div id="app__svg"></div>
    `,
    data: ()=> {
        return {
            contrys: [
                {id: 'china', translate: [-1700, -600]},
                {id: 'australia', translate: [-1900, -1000]},
                {id: 'india', translate: [-1600, -700]},
                {id: 'america', translate: [100, -600]},
            ],
            pointService: new PointService()
        }
    },
    mounted: function () {
        let s = Snap("#app__svg");
        Snap.load("trasparentMap.svg", function (c) {
            s.append(c);
        });

        $('#app__svg').on('click', (e)=> {
            let svgTranslateAni = new Snap.Matrix()
            svgTranslateAni.scale(1);
            $svg = s.select('#Page-1');
            $svg.animate({transform: svgTranslateAni}, 1000);
            this.$emit('actMenu', {active: false});
            this.pointService.removePoint($svg)
        });
        $('#app__svg').on('click', 'path[contry]', (e)=> {
            e.preventDefault();
            e.stopPropagation();
            var contry_name = $(e.target).attr('contry');
            var contry = this.contrys.find(o=> o.id == contry_name);
            let svgTranslateAni = new Snap.Matrix()
            svgTranslateAni.translate(...contry.translate);
            svgTranslateAni.scale(2);


            $svg = s.select('#Page-1');
            $svg.animate({transform: svgTranslateAni}, 1000);
            this.$emit('actMenu', {active: true});

            let a = $svg.select('#'+e.target.parentElement.id)
            let p1 = this.pointService.newPoint(100,100,0.05);
            let p2 = this.pointService.newPoint(120,50,0.08);
            let p3 = this.pointService.newPoint(60,170,0.03);
            a.append(p1);
            a.append(p2);
            a.append(p3);
            this.pointService.animatePoints(a);
            return;
        });
    }
})
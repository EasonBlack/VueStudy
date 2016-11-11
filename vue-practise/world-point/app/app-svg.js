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
            ]
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
        });
        $('#app__svg').on('click', 'path[contry]', (e)=> {
            e.preventDefault();
            e.stopPropagation();

            console.log($(e.target))
            var contry_name = $(e.target).attr('contry');
            var contry = this.contrys.find(o=> o.id == contry_name);
            let svgTranslateAni = new Snap.Matrix()
            svgTranslateAni.translate(...contry.translate);
            svgTranslateAni.scale(2);
            $svg = s.select('#Page-1');
            $svg.animate({transform: svgTranslateAni}, 1000);
            this.$emit('actMenu', {active: true});
            return;
        });
    }
})
class PointService {
    constructor() {
        this.points = [];


    }

    newPoint(x, y, s) {
        let _id = 'id_' + this.points.length;
        this.points.push({id: _id, s: s, x: x, y: y});
        let point = Snap.parse(`<g class="cylinder-container" id="${_id}" transform="translate(${x},${y}) scale(${s})">
            <rect x="0" y="20" width="150" height="80" fill="url(#pointColor)" fill-opacity="0.85"
                  stroke-opacity="0.1"></rect>
            <ellipse cx="75" cy="20" rx="75" ry="15" class="top" fill="#ffff03" stroke-opacity="0.1"
                     fill-opacity="1"></ellipse>
            <ellipse cx="75" cy="100" rx="75" ry="15" class="bottom" fill="#FCD202" stroke-opacity="0.1"
                     fill-opacity="0.95"></ellipse>
        </g>`);
        return point;
    }

    animatePoints(g) {
        this.points.forEach((p)=> {
            let a = g.select('#' + p.id);
            this.breath(a, p);
        });
    }

    removePoint(g) {
        this.points.forEach((p)=> {
            g.select('#' + p.id).remove();
        });
        this.points = [];
    }

    breath(g, p) {
        let svgScale = new Snap.Matrix()
        svgScale.translate(p.x, p.y);
        svgScale.scale(p.s * 1.3.toFixed(2));
        let svgScaleNone = new Snap.Matrix();
        svgScaleNone.translate(p.x, p.y);
        svgScaleNone.scale(0);

        let svgScaleBack = new Snap.Matrix();
        svgScaleBack.translate(p.x, p.y);
        svgScaleBack.scale(p.s);

        g.animate(
            {transform: svgScale},
            1000,
            ()=> {
                g.animate({transform: svgScaleNone}, 1000, ()=> {
                    g.animate({transform: svgScaleBack}, 1000, ()=> {
                        this.breath(g, p);
                    });
                });
            }
        );
    }
}

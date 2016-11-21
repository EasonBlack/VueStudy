Vue.component('app-item', {
    props: ['item', 'index'],
    template: `<li class="app__item"
             
                   :style="{ bottom: _bottom , 
                         right: _right,
                         width: _width ,
                         height: _height,
                         'background-color': item.bgc,
                         opacity: _opacity,
                         zIndex: 20-index 
                   }"
                >
         This is Item {{item.title}}  {{index}}
     </li>`,
    computed: {
        _bottom: function () {
            return 200 * (0.45 * this.index ) + 'px'
        },
        _right: function () {
            return this.index * 2 + 'px'
        },
        _width: function () {
            return 300 * (1 - 0.15 * this.index) + 'px'
        },
        _height: function () {
            return 300 * (1 - 0.2 * this.index) + 'px'
        },
        _opacity: function () {
            if (this.item.ready) {
                return 0.3
            } else {
                return 1 - this.index * 0.2
            }

        }

    }
})
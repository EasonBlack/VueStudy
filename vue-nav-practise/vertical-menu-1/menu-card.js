Vue.component('menu-card', {
    props: ['item'],
    template: `<div class="card-container">
        <div class="card-image"></div>
        <div class="card-content">
              <div class="card-title">{{item.title}}</div>
              <div class="card-cost">$ {{item.price}}</div>
              <div class="card-control">
                   <a class="btn btn-minus" v-on:click="minus">-</a>
                   <span class="btn-num">{{item.num}}</span>
                   <a class="btn btn-add"  v-on:click="add">+</a>
               </div>
        </div>
    </div>`,
    methods: {
        minus: function () {
            if (this.item.num > 0)
                this.item.num--
            //this.$emit('minus',{})
        },
        add: function () {
            this.item.num++;
        }
    }
})
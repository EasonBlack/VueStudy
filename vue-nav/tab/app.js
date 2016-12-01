Vue.component('app',{
    template: `<div class="tabs">
        <app-tab v-for="group in groups" :group="group" :activegroup="activegroup" ></app-tab>
    </div>`,
    data: function() {
        return {
            activegroup: 'g1',
            groups: [
                {id: 'g1',title: 'G1', content: 'aaaaaa'},
                {id: 'g2',title: 'G2', content: 'bbbbbb'}
            ]
        }
    },
    methods:{

    }
})
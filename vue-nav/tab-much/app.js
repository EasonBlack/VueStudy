Vue.component('app', {
    template: `<div class="container">
        <div class="tabs-container">
            <div class="prev" v-on:click="prev" v-if="position!=0"></div>
            <ul class="tabs"
                :style="{
                    marginLeft: (-1 * position * 80) + 'px'
                }">
                <li v-for="group in groups" v-on:click="selectGroup = group;selectText = group.content"
                    v-bind:class="{
                        active: selectGroup.id==group.id
                    }">
                    {{group.title}}
                </li> 
            </ul> 
            <div class="next" v-on:click="next" v-if="(position + 4)!=groups.length"></div>
        </div>
        <transition  name="tran" mode="out-in">
             <div class="content" :key="selectText">
                 {{selectText}}
             </div>
        </transition>
        <!--<div class="content" :key="selectText" transition="tran">-->
            <!--{{selectText}}-->
        <!--</div>-->
        
    </div>`,
    data: function () {
        return {
            position: 0,
            selectGroup: null,
            groups: [
                {id: 'g1', title: 'G1', content: 'aaaaaa'},
                {id: 'g2', title: 'G2', content: 'bbbbbb'},
                {id: 'g3', title: 'G3', content: 'cccccc'},
                {id: 'g4', title: 'G4', content: 'dddddd'},
                {id: 'g5', title: 'G5', content: 'eeeeee'},
                {id: 'g6', title: 'G6', content: 'ffffff'},
                {id: 'g7', title: 'G7', content: 'gggggg'}
            ]
        }
    },
    created: function () {
        this.selectGroup = this.groups[0];
        this.selectText = this.groups[0].content;
    },
    methods: {
        next: function () {
            this.position++
        },
        prev: function () {
            this.position--
        }
    }
})
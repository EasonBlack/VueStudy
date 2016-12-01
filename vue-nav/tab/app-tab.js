Vue.component('app-tab',{
    props: ['group', 'activegroup'],
    template:`<div class="tab">
        <input type="radio" :id="group.id" name="tab-group-1" v-model="picked"  :value="group.id">
        <label :for="group.id">{{group.title}}</label>     
        <div class="content">
            <div>{{group.content}}</div>
        </div> 
    </div>`,
    data:function() {
        return {
            picked: null
        }
    },
    created: function(){
        if(this.group.id == this.activegroup) {
            this.picked = this.group.id;
        }
        //console.log(this.activegroup , this.group.id)

    },
    methods: {

    }

})
Vue.component('leftMenu',{
    template: `
    <div class="left-menu__container">  
         <div class="left-menu__title"> 
             Projects 
         </div>
         <ul class="left-menu__projects">
              <li class="left-menu__project" v-for="project in projects">
                  {{project.title}}
              </li>  
         </ul>
    </div>
    `,
    data: function () {
        return {
            projects : [
                {id: 1, title: 'Project One'},
                {id: 2, title: 'Project Two'},
                {id: 3, title: 'Project Three'},
                {id: 4, title: 'Project Four'},
                {id: 5, title: 'Project Five'},
                {id: 6, title: 'Project Six'}
            ]
        }
    },
})
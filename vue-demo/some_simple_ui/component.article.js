Vue.component('article-item', {
    props: ["article"],
    template: `<div class="article__container">
        <div>
            <img :src="article.src" > 
        </div>
        <div>
            <h1>{{article.title}}</h1>
            <div> {{article.content}}</div>   
        </div>
        <a class="btn btn__edit" @click="showEditModel">Edit</a>
    </div>`,
    methods: {
        showEditModel() {
            this.$emit('showModal', this.article);
        }
    }
})
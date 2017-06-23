new Vue({
    el: '#app',
    data: {
        articles: [
            {src: 'http://lorempixel.com/800/450/sports/1/', title: 'Demo', content: 'demo content'},
            {src: 'http://lorempixel.com/800/450/sports/2/', title: 'Demo', content: 'demo content'},
        ],
        newModalFlag: false,
        selectedItem: null
    },
    methods: {
        showModal(data) {
            if(data && data.title) {
                this.selectedItem = data
            }
            this.newModalFlag = true;
        },
        closeModal() {
            this.selectedItem = null;
            this.newModalFlag = false;
        },
    },
    template:`<div class="app__container">
        <a class="btn btn__add" @click="showModal">Add New</a>
        <new-modal v-if='newModalFlag' @closeModal="closeModal" :selectedItem="selectedItem"></new-modal>
        <article-item v-for="article in articles" :key="article" :article = 'article' @showModal="showModal"></article-item>
    </div>`
})
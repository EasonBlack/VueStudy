Vue.component('new-modal', {
    props: ["selectedItem"],
    template: `<div class="new-modal__mask"  @click ='closeModal'>
        <div class="new-modal__container"  @click.prevent.stop>
            <h2>
               {{modalTitle}}
            </h2>
            <div class="form__row">
                <div>Image</div>
                <div>
                     <input type="text" v-model="modal.src"/>
                </div>
            </div>
            <div class="form__row">
                <div>Title</div>
                <div>
                     <input type="text" v-model="modal.title" />
                </div>
            </div>
            <div class="form__row">
                <div>Content</div>
                <div>
                     <textarea  v-model="modal.content"/>
                </div>
            </div>
            <div class="action__panel">
                <a class="btn btn__save" @click="save">Save</a>
                <a class="btn btn__cancel" @click="cancel">Cancel</a>
            </div>
        </div>
        
    </div>`,
    created() {
        if(this.selectedItem) {
            this.modal.src = this.selectedItem.src;
            this.modal.title = this.selectedItem.title;
            this.modal.content = this.selectedItem.content;
        }
    },
    data() {
        return {
            modal: {
                src: '',
                title: '',
                content: ''
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        },
        save() {
            this.$emit('closeModal');
        },
        cancel() {
            this.$emit('closeModal');
        }
    },
    computed: {
        modalTitle() {
            return this.selectedItem ? 'Edit Article': 'Add Article';
        }
    }
})
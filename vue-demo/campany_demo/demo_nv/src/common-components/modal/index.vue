<template>
    <transition name="fade" mode="out-in">
        <div class='mask'  @click='cancel'>
            <transition name="fromtop" mode="out-in">
            <div class="modal-dialog" role="document" @click.prevent.stop='' v-if='showModal'>
                <div class="modal-content">
                    <div class="modal-header">
                        <slot name='header'>
                            <h5 class="modal-title">{{title}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click='cancel'>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot name='body'></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name='footer'></slot>
                    </div>
                </div>
            </div>
             </transition>
        </div>
    </transition>
</template>
  
<script>
export default {
    props: ['title'],
    data() {
        return {
            showModal: false
        }
    },
    created() {
        setTimeout(()=>{
            this.showModal = true;
        }, 300)
    },
    methods: {
        cancel() {
            this.$emit('cancel')
        }
    }
}
</script>

<style lang='scss' scoped>
    .mask {
        width:100vw;
        height: 100vh;
        position: fixed;
        top:0;
        left: 0;
        background-color: rgba(black, 0.2);
        display: flex;
        justify-content: center;
        padding-top: 100px;
    }

    .close:focus {
        outline: none;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
         opacity: 0;
    }

    .fromtop-enter-active, .fromtop-leave-active {
        transition: all 0.5s ease;
    }
    .fromtop-enter, .fromtop-leave-to {
        transform: translateY(-500px);
    }
   
</style>

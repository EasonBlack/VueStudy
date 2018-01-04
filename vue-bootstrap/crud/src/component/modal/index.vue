<template>
    <div class='mask'  @click='cancel'>
        <div class="modal-dialog" role="document" @click.prevent.stop=''>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot name='body'></slot>
                </div>
                <div class="modal-footer">
                    <slot name='footer'></slot>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['title'],
    methods: {
        cancel() {
            this.$emit('cancel')
        }
    }
}
</script>

<style>

</style>

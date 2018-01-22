<template>
     <modal :title='"Customer Name"' @cancel='cancel' class='customer-details-popup'>
        <div slot="header" class='d-flex w-100 align-items-center'>
            <label class='m-0'>Customer Name:</label>
            <span>xxxx</span>
            <div class='ml-auto'>
                <a class='btn btn-primary text-white'>Update</a>
                <a class='btn btn-primary text-white' @click='cancel'>Close</a>
            </div>
        </div>
        <div slot="body">
            <div class='info-box bg-white pb-20 d-flex flex-wrap'>
                <box :title='"Service Location Details"'>
                    <form-row :title='"Latitue"' :labelspan='"6"'>
                        <span>xxxxxx</span>
                    </form-row>
                    <form-row :title='"Longitude"' :labelspan='"6"'>
                        <span>xxxxxx</span>
                    </form-row>
                </box>
                <box :title='"Billing Address Details"'>
                    <form-row :title='"Contact Number"' :labelspan='"6"'>
                        <span>77777777</span>
                    </form-row>
                    <form-row :title='"PO Box"' :labelspan='"6"'>
                        <span>xxxxxx</span>
                    </form-row>
                </box>     
            </div>
        </div>
    </modal>   
</template>
<script>   
    import {mapState} from 'vuex'
    import formRow from '$components/form-row/index.vue';
    import box from '$components/box/index.vue';
    import modal from '$components/modal/index.vue';
    export default {
        components: {modal, formRow, box},
        methods: { 

            cancel() {
                this.$store.commit('toggleCustomerDetailPopup', false);
            },
        }
    }
</script>
<style lang='scss' scoped>
    .customer-details-popup /deep/ .modal-dialog {
        max-width: 80%;
        width: 80%;
    }
</style>
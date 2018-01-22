<template>
    <div class='row'>
        <div class='col-12 d-flex bg-white align-items-center mb-1 py-10'>   
            <label class='m-0'>Customer Name: </label>
            <span class='font-weight-bold'>xxxxxxxxxxxx</span>
            
            <div class='ml-auto'>
                <a class='btn btn-primary text-white' @click='openPopup'>Edit</a>
            </div>
        </div>
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
        <pop-up v-if='popup' />
    </div>
   
</template>
<script>   
    import {mapState} from 'vuex';
    import box from '$components/box/index.vue';
    import formRow from '$components/form-row/index.vue';
    import popUp from './customerDetails-popup.vue';
    export default {
        components: {box, formRow,popUp},
        methods: {
            openPopup() {
                this.$store.commit('toggleCustomerDetailPopup', true);
            }
        },
        computed: {
            ...mapState({
                popup: (state)=>state.account_detail.popup
            })
        }
    }
</script>
<style lang='scss' scoped>
   
</style>
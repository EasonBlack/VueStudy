<template>
    <div class='info-box bg-white pb-20'>
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
</template>
<script>   
    import box from '$components/box/index.vue';
    import formRow from '$components/form-row/index.vue';
    export default {
        components: {box, formRow}
    }
</script>
<style lang='scss' scoped>
   
</style>
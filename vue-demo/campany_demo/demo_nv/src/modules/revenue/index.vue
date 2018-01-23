<template>
    <div class='w-100'>
        <div class='container'>
            <div class='row'>
                <div class='col-12 bg-blue'>
                    <div class='page-title text-white'>REVENUE CYCLE DAHSBOARD</div>
                </div>
            </div>
            
            <div class='row'>
                <rev-eff />
            </div>
        </div>
    </div>
</template>
<script>
    import revEff from './revRealisationEff-wrapper.vue';
    export default {
        components: {revEff}
    }
</script>
<style lang='scss' scoped>
    .page-title {
        width:100%;
        font-size:20px;
        font-weight:bold;
        padding: 15px;
        text-align:center;
    }
</style>
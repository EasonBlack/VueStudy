<template>
    <box :title='"Revenue Realisation Efficiency"'>
        <chart />
    </box>  
</template>
<script>
     import box from '$components/box/index.vue';
     import chart from './revRealisationEff-chart.vue';
     export default {
         components:{box, chart} 
     }
</script>
<style>
</style>
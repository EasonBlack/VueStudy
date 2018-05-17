<template>
    <div class='row'>
       <div class='col-md-9 col-sm-12'>
           <chart1 />
       </div>
       <div class='col-md-3 col-sm-12'>
           <chart2 />
       </div>
    </div>
</template>

<script>
    import chart1 from '../charts/chart1/index.vue'
    import chart2 from '../charts/chart2/index.vue'
    export default {
        components: {chart1, chart2}
    }
</script>
<template>
    <div class='chart-wrapper'>
        <svg height="100%" width="100%" viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="100"  fill="steelblue"/>
            <circle cx="150" cy="150" r="40"  fill="white"/>
            <text   text-anchor="middle" x="150" y="150" dy='5'>0.00%</text>
        </svg>
    </div>
</template>

<script>
    export default{
       props: ['value']
    }
</script>

<style lang='scss' scoped>
    .chart-wrapper {
        width:100%;
        height:100%;
        position:relative;

    }
</style>

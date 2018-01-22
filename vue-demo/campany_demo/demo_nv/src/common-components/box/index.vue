<template>
     <div class='col-xs-12 col-sm-12 col-md-12 col-lg-6 '>
        <div class='box bg-grey'>
            <div class='text-center text-white bg-orange p-10'>
                <h6>{{title}}</h6>
            </div>
            <div class='pt-20'>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['title']
    }
</script>
<style lang='scss' scoped>
</style>
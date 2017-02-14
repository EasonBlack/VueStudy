<template>
    <div class='board__container'>
        <box v-for='i in 9' :index='i' :b='b' :current='current'></box>
    </div>
</template>
<script>
    import box from './board_box.vue';
    export default {
        components: {box},
        props: ['b', 'current'],
        data() {
            return {
            }
        }
    }
</script>
<style lang='scss' scoped>
    .board__container {
        display:flex;
        flex-wrap: wrap;
        position:relative;
        width:330px;
        height:330px;
    }

</style>
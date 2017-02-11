<template>
    <ul class='sub-list__container'
     v-bind:class="{
        active: active
     }" >
        <sub-item v-for='sub in subs' :subitem='sub'></sub-item>
    </ul>
</template>
<script>
    import subItem from './sub_item.vue';
    export default {
        components: {subItem},
        props: ['subs', 'active']

    }
</script>
<style lang='scss' scoped>
    .sub-list__container {
        position:absolute;
        width:120px;

        right:0;
        top:0;
        opacity:0;
        transition:all 0.2s ease;
        &.active {
            right: -120px;
            opacity:1;
        }
    }

</style>
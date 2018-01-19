<template>
    <div>
        <search-panel />
        <account-panel />
    </div>
</template>
<script>
    import searchPanel from './searchPanel.vue';
    import accountPanel from './accountPanel.vue';
    export default {
        components: {searchPanel, accountPanel},
        data() {
            return {

            }
        }
    }
</script>
<style>
</style>
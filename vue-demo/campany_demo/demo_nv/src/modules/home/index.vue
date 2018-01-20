<template>
    <div>
        <search-panel   />
        <account-panel  />
        <account-detail />
    </div>
</template>
<script>
    import searchPanel from './searchPanel.vue';
    import accountPanel from './accountPanel.vue';
    import accountDetail from './accountDetail.vue';
    export default {
        components: {searchPanel, accountPanel, accountDetail},
        data() {
            return {

            }
        }
    }
</script>
<style>
</style>
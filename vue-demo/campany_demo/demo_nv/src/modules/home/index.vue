<template>
    <div class='w-100'>
        <div class='container'>
            <search-panel   />
            <account-panel  />
            <account-detail />
        </div>
    </div>
   
</template>
<script>
    import searchPanel from './searchPanel.vue';
    import accountPanel from './accountPanel.vue';
    import accountDetail from './detail/index.vue';
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
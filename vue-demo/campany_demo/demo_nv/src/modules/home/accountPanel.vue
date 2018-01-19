<template>
    <div class='container'>
        <div>Accounts</div>
        <account-table />
    </div>
</template>
<script>
    import accountTable from '$components/table/index.vue';
    export default {
        components: {accountTable}
    }
</script>
<style>
</style>
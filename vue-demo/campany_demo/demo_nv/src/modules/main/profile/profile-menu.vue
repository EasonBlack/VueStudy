<template>
    <ul class='dropdown-menu'>
        <li class="dropdown-item">
            <a><i class='fa fa-user' /> My Profile</a>
        </li>
        <li class="dropdown-item">
            <a><i class='fa fa-inbox' /> My Inbox</a>
        </li>
        <li class='dropdown-divider'></li>
        <li class="dropdown-item">
            <a><i class='fa fa-sign-out' /> Sign Out</a>
        </li>
    </ul>
</template>
<script>
    export default {

    }
</script>
<style lang='scss' scoped>
    .dropdown-menu {
        // display:block !important;
        right: 0;
        left:0;
    }
</style>
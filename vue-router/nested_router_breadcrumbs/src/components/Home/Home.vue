<template>
    <div>
        <div>This is Home</div>
        <ul>
            <li>
                <router-link to="/home">Index</router-link>
            </li>
            <li>
                <router-link to="/home/event">Event</router-link>
            </li>
            <li>
                <router-link to="/home/resource">Resource</router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<style>

</style>
<script>

    export default{

    }
</script>

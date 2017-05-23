<template>
    <div>This is grand child, {{message}}</div>
</template>

<script>
    export default {
        inject: ['message']
    }
</script>
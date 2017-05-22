<template>
    <div>This is grand child, {{message}}, {{test}}</div>
</template>

<script>
    export default {
        inject: ['message', 'test']
    }
</script>
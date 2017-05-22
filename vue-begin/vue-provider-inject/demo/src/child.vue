<template>
    <div>
        <div>This is child, {{message}}</div>
        <grand-child></grand-child>
    </div>
</template>

<script>
    import grandChild from './grandchild.vue'
    export default {
        components: {grandChild},
        inject: ['message']
    }
</script>
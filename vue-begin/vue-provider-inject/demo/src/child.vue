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
        provide() {
            return {
                test: this.test
            }
        },
        data() {
            return {
                test: 'ccccc'
            }
        },
        inject: ['message']
    }
</script>
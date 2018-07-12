<template>
    <div class='card'>
        <ul>
            <li v-for='key in item.KEYS_NAME' :key='key'>
                {{key}}
            </li>
        </ul>
        <pre>{{item.CONTENT}}</pre>
    </div>
</template>
<script>
    export default {
        props: ['item']
    }
</script>
<style lang='scss' scoped>
    .card {
        width :100%;
    }
    ul {
        display: flex;
    }
    pre {
        width: 100%;

    }
</style>
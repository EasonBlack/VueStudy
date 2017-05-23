<template>
    <div class="container">
       This is base view {{message}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        created: function() {
            console.log('created!!');
        }
    }

</script>

<style lang="scss" scoped>
    .container {
        color: red;
    }
</style>
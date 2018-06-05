<template>
    <div>This is Chart 2</div>
</template>

<script>
    export default {
        name: 'chart2',
        data() {
            return {
                content: null
            }
        },
        created() {
            setTimeout(()=>{
                this.content = 'CHART TWO';
            }, 1000);
        }
    }
</script>
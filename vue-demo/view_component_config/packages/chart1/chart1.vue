<template>
    <div>This is Chart 1</div>
</template>

<script>
    export default {
        name: 'chart1',
        data() {
            return {
                content: null
            }
        },
        created() {
            setTimeout(()=>{
                this.content = 'CHART ONE';
            }, 1000);
        }
    }
</script>
<template>
    <div>This is Chart 4</div>
</template>

<script>
    export default {
        name: 'chart4',
        data() {
            return {
                content: null
            }
        },
        created() {
            
            setTimeout(()=>{
                this.content = 'CHART FOUR';
            }, 1000);
        }
    }
</script>
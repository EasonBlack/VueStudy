<template>
    <div>
        <div>
            This is Chart 3
        </div>
        <div>
            {{content}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'chart3',
        data() {
            return {
                content: null
            }
        },
        created() {
            setTimeout(()=>{
                this.content = 'CHART THERE';
            }, 1000);
        }
    }
</script>
<template>
    <div>
        <div>
            This is Chart 2
        </div>
        <div>
            {{content}}
        </div>
    </div>
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
            this.$store.commit('addLoadingNum');
            setTimeout(()=>{
                this.content = 'CHART TWO';
                this.$store.commit('minusLoadingNum');
            }, 1000);
        }
    }
</script>
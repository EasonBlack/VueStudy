<template>
    <div>
        <div>
            This is Chart 4
        </div>
        <div>
            {{content}}
        </div>
    </div>
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
            this.$store.commit('addLoadingNum');
            setTimeout(()=>{
                this.content = 'CHART FOUR';
                this.$store.commit('minusLoadingNum');
            }, 1000);
        }
    }
</script>
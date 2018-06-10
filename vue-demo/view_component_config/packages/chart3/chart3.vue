<template>
    <div>
        <div>
            This is Chart 3, {{p1}}
        </div>
        <div>
            {{content}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'chart3',
        props: ['p1'],
        data() {
            return {
                content: null
            }
        },
        created() {
            this.$store.commit('addLoadingNum');
            setTimeout(()=>{
                this.content = 'CHART THERE';
                this.$store.commit('minusLoadingNum');
            }, 1000);
        }
    }
</script>
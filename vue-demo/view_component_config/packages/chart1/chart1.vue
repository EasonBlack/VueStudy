<template>
    <div>
        <div>
            This is Chart 1 {{p1}}, {{p2}}
        </div>
        <div>
            {{content}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'chart1',
        props: ['p1', 'p2'],
        data() {
            return {
                content: null
            }
        },
        created() {
            this.$store.commit('addLoadingNum');
            setTimeout(()=>{
                this.content = 'CHART ONE';
                this.$store.commit('minusLoadingNum');
            }, 2000);
        }
    }
</script>
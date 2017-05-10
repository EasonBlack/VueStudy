<template>
    <div class='grid__container'>
        <div class='row__container' v-for='(r,i) in grid'>
            <div class='box__container' v-for='(b,j) in r' @mouseenter='mouseoverHandle' :data-po='i+"-" + j' >
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['ismove', 'isBoxMove'],
        data() {
            return {
                grid: [
                    [1,1,1,1,1],
                    [1,1,1,1,1],
                    [1,1,1,1,1],
                    [1,1,1,1,1]
                ]
            }
        },
        methods: {
            mouseoverHandle(e) {

                if(!this.ismove && !this.isBoxMove) return false;
                this.$emit('gridmove', e.target.attributes['data-po'].value)
                console.log(e.target.attributes['data-po'].value)
            }
        }
    }
</script>
<style lang='scss' scoped>
    .grid__container {
        position:relative;
    }
    .row__container {
        display:flex;
    }
    .box__container {
        width:100px;
        height:100px;
        border: 1px solid #ccc;
    }
</style>
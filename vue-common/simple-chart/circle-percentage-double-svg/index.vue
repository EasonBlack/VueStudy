<template>
    <svg width=100% height=100% viewBox='0 0 220 220'>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
            </linearGradient>
        </defs>
        <path d="M110, 10
            A100, 100, 0, 1, 1, 10, 110"
              stroke-linecap="round"
              stroke-width="20"
              stroke = "#ccc"
              fill='none'
        >
        </path>
        <path d="M110, 10
            A100, 100, 0, 1, 1, 10, 110"
              :stroke-dasharray = "bigDasharray"
              stroke-dashoffset = 0
              stroke-linecap="round"
              stroke-width="10"
              stroke = "skyblue"
              fill='none'
        >
        </path>

        <path d="M110, 60
            A50, 50, 0, 1, 1, 60, 110
            "
              stroke-linecap="round"
              stroke-width="20"
              stroke = "#ccc"
              fill='none'
        >
        </path>
        <path d="M110, 60
            A50, 50, 0, 1, 1, 60, 110
            "
              :stroke-dasharray = "smallDasharray"
              stroke-linecap="round"
              stroke-width="10"
              stroke = "url(#grad1)"
              fill='none'
        >
        </path>
        <text x="110" y="100" fill="black" text-anchor="middle" alignment-baseline="central" font-size="1.4em">{{num2}}</text>
        <text x="110" y="120" fill="black" text-anchor="middle" alignment-baseline="central">%</text>

        <text x="100" y="10" fill="black" text-anchor="end" alignment-baseline="central" font-size="1em">OUTDOOR {{num1}}</text>
        <text x="100" y="60" fill="black" text-anchor="end" alignment-baseline="central" font-size="1em">INDOOR{{num2}}</text>
    </svg>
</template>

<script>

    export default{
        props:['num1','num2', 'size1','size2'],
        data(){
            return{
                big_r : 100,
                small_r: 50
            }
        },
        computed: {
            bigDasharray() {
                let _l = Math.PI * 1.5 * this.big_r;
                let l1 = this.num1/this.size1 * _l;
                return `${l1} ${_l}`
            },
            smallDasharray() {
                let _l = Math.PI * 1.5 * this.small_r;
                let l1 = this.num2/this.size2 * _l;
                return `${l1} ${_l}`
            },

        }

    }
</script>

<style lang='scss' scoped>

</style>

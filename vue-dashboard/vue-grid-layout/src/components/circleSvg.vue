<template>
    <div class='container'>
    <div class='plus' @click.prevent.stop='enlarge'>+</div>
    <div class='minus' @click.prevent.stop='ensmall'>-</div>
    <svg width='100%' height='100%' viewBox='0 0 220 220'>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
                <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
            </linearGradient>
            <filter id="f1" x="0" y="0" filterUnits="userSpaceOnUse">
                <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
        </defs>
        <path class='p1' d="M110, 20
            A90, 90, 0, 1, 1, 20, 110
            "
              stroke-linecap="round"
              stroke-width="20"
              stroke = "#ccc"
              filter="url(#f1)"
              fill='none'
        >
        </path>
        <path class='p2' d="M110, 20
            A90, 90, 0, 1, 1, 20, 110
            "
              stroke-dasharray = '70,600'
              stroke-dashoffset = 0
              stroke-linecap="round"
              stroke-width="10"
              stroke = "skyblue"
              fill='none'
        >
        </path>

        <path d="M110, 50
            A60, 60, 0, 1, 1, 50, 110
            "
              stroke-linecap="round"
              stroke-width="20"
              stroke = "#ccc"
              fill='none'
              filter="url(#f1)"
        >
        </path>
        <path d="M110, 50
            A60, 60, 0, 1, 1, 50, 110
            "
              stroke-linecap="round"
              stroke-width="10"
              stroke = "url(#grad1)"
              fill='none'
        >
        </path>
    </svg>
    </div>
</template>

<script>
    export default {
        props: ['oldposition'],
        data() {
            return {
            }
        },
        created() {

        },
        methods: {
            enlarge() {
                this.$emit('setWidget', 'flower');
            },
            ensmall() {
                this.$emit('setWidget', this.oldposition);
            }
        }
    }
</script>

<style lang='scss' scoped>
     .container {
          position:relative;
     }

     .plus {
        width:10px;
        height:10px;
        position:absolute;
        top:0px;
        right:0px;
        cursor:pointer;
     }

     .minus {
        width:10px;
        height:10px;
        position:absolute;
        top:0px;
        right:15px;
        cursor:pointer;
     }


      .p1,.p2 {
          transform: rotate(-135deg);
          transform-origin: 50% 50%;
     }

</style>
<template>
        <svg role="img" xmlns="http://www.w3.org/2000/svg">
            <circle class="circle-background"
                :style='{
                    r: radius
                }'
            />
            <circle class="circle-foreground"
                :style='{
                    "stroke-dasharray": dasharray,
                    "stroke-dashoffset" : dashoffset,
                    r: radius
                }'
            />
        </svg>
</template>

<script>

    export default{
        props:['num', 'width'],
        data(){
            return{

            }
        },
        computed: {
            radius: function() {
                return (this.width - 25)/2
            },
            dasharray: function() {
                let r = (this.width - 25) * Math.PI;
                let o = (this.num /100) * r;
                return `${o}px ${r}px`
            },
            dashoffset: function() {
                let r = (this.width - 25) * Math.PI;
                let o = (this.num /100) * r;
                return `${o}px`
            }
        }


    }
</script>

<style lang='scss' scoped>
    svg {
        width: 100%;
        height: 100%;
    }

    svg .circle-background,    svg .circle-foreground {
        r: 87.5px;
        cx: 50%;
        cy: 50%;
        fill: none;
        stroke: #305556;
        stroke-width: 25px;
    }

    svg .circle-foreground {
        stroke: #389967;
        stroke-linecap: round;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
    }
    svg .circle-foreground {
        -webkit-animation: offset 3s ease-in-out forwards;
        animation: offset 3s ease-in-out forwards;
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
    }

    @keyframes offset {
        100% {
            stroke-dashoffset: 0;
        }
    }
</style>

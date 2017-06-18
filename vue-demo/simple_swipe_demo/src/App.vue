<template>
	<div class='app__container'>
	    <div class='ul__wrapper'>
	        <ul  :class='["position_"+current]' >
                <li v-for='(item,index) in items' :class="{
                        shouldscale: current != index
                    }"
                >
                    <div class='item__container'
                         :class="{
                            full: current==index && full
                         }"
                    >
                        <img :src='item.src' draggable=false />
                    </div>
                </li>
            </ul>
	    </div>

	</div>
</template>

<script>
	export default {
        data() {
            return {
                current: 0,
                full: false,
                items: [
                    {src: "http://lorempixel.com/300/300/animals/1" },
                    {src: "http://lorempixel.com/300/300/animals/2" },
                    {src: "http://lorempixel.com/300/300/animals/3" }
                ]
            }
        },
        methods: {

        },
        mounted() {
           let startX = 0;
           let endX = 0;
           const $ul = this.$el.querySelector('ul');


           this.handleMousedown = (e) => {
                startX = e.screenX;
           }

           this.handleMouseup = (e)=> {
                endX = e.screenX;
                this.handleSwipe()
           }

           this.handleSwipe = () => {
               if (endX < startX) {
                   console.log('swiped left!');
                   if(this.current < this.items.length-1 ) {
                        this.current++;
                   }
               }
               if (endX > startX) {
                   console.log('swiped right!');
                   if(this.current > 0) {
                        this.current--;
                   }
               }
           }

            $ul.addEventListener('mousedown', this.handleMousedown.bind(this))
            $ul.addEventListener('mouseup', this.handleMouseup.bind(this))
        },
        beforeDestroy() {
             const $ul = this.$el.querySelector('ul');
             $ul.removeEventListener('mousedown', this.handleMousedonw);
             $ul.removeEventListener('mouseup', this.handleMouseup);
        }
	}
</script>
<style lang='scss' scoped>
    $liwidth: 400;
    .app__container {
        width: 100vw;
        height:100vh;
        .ul__wrapper {
            position:absolute;
            margin: auto auto;
            top: 0;
            bottom:0;
            left: 0;
            right: 0;
            border: 1px solid steelblue;
            overflow:hidden;
            width:500px;
            height:500px;
        }
        ul {
            display:flex;
            position:relative;
            transition:all 0.3s ease;
        }
        li {
            display:block;
            flex: 0 0 #{$liwidth}px;

            transition:transform 0.3s ease;
            .item__container {
                padding:20px;
                transition:padding 0.3s ease;
                &.full {
                    margin-left: -50px;
                    width:500px;
                    z-index:100;
                    padding:0;
                }
            }
            img {
                display:block;
                width:100%;
            }
            &.shouldscale {
                transform: scale(0.9);
            }
        }
    }

    @for $i from 0 through 5 {
      .position_#{$i}) {
         margin-left : #{50 + -1 * $liwidth * $i}px
      }
    }
</style>
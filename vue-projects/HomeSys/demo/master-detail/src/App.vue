<template>
    <div class="container">
        <div v-for="(item, index) in items"
             class="item-wrapper"
             @click="toggleStatus(item.name)"
        >{{item.name}}
            <transition
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:leave="(el, done)=>leave(el,done,item)"
                    v-bind:css="false"
            >
                <div v-if="item.name == largeName"
                     class="item-detail"
                     :data-top = "index * 105 + 'px'"
                     @click.prevent.stop="toggleStatus()">
                    {{item.detail}}
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import Velocity from 'velocity-animate';
    export default {

        data() {
            return {
                items: [
                    {name: 'ITEM 1', detail: 'ITEM 11111'},
                    {name: 'ITEM 2', detail: 'ITEM 22222'},
                    {name: 'ITEM 3', detail: 'ITEM 33333'},
                    {name: 'ITEM 4', detail: 'ITEM 44444'}
                ],
                largeName: null
            }
        },
        methods: {
            beforeEnter(el, item) {
                el.style.position = 'absolute';
                el.style.marginTop = '-100px';
            },
            enter(el, done) {
                Velocity(el, { width: '100vw',height:'100vh', marginTop: '0px', top: 0}, { duration: 300 })
            },
            leave(el, done, item) {
                console.log(item);
                Velocity(el, { width: '100px',height:'100px', top: el.dataset.top}, { duration: 300 })
                Velocity(el, { position: 'relative', opacity : 0}, { duration: 500, complete: done })
            },
            toggleStatus(name) {
                if (name == this.largeName) {
                    this.largeName = null;
                } else {
                    this.largeName = name;
                }
            }
        }
    }

</script>
<style lang='scss' scoped>
    .container {
        width: 100vw;
        height: 100vh;
        position: relative;
    }

    .item-wrapper {
        width: 100px;
        height: 100px;
        line-height: 100px;
        background-color: steelblue;
        color: white;
        text-align: center;
        margin-bottom: 5px;
    }

    .item-detail {
        left: 0px;
        background-color: steelblue;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        transition:all 0.3s;
    }



</style>
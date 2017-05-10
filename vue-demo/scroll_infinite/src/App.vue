<template>
    <div class='main__container'>
        <ul class="list">
            <li v-for="(item, index) in items">
                <label>{{item}}</label>
                <label>{{index}}</label>
            </li>
        </ul>
        <infinite-loading @onInfinite="onInfinite" :distance="distance" ref="infiniteLoading"></infinite-loading>
    </div>
</template>

<script>
    import infiniteLoading from './infinite.vue';
    export default {
        components:{infiniteLoading},
        data() {
            return {
                distance:100,
                items: [
                    'aaa1',
                    'aaa2',
                    'aaa3',
                    'aaa4'
                ]
            }
        },
        methods: {
            onInfinite: function () {
                if(this.items.length > 200) {
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                } else {
                    setTimeout(function () {
                        var temp = [];
                        for (var i = this.items.length; i <= this.items.length + 10; i++) {
                            temp.push(Math.random()*100 + 10);
                        }
                        this.items = this.items.concat(temp);
                        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                    }.bind(this), 1000);
                }


            }
        }
    }
</script>
<style lang="scss" scoped>
    .main__container {
        width: 100vw;
        height: 100vh;
        background-color: #EFEFEF;
        position: relative;
        padding-top: 50px;
        overflow-y:scroll;
    }

    .list {
        width: 100%;
        display: flex;
        flex-direction: column;
        li {
            padding: 0 20px;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;
            label {
                flex: 1;
            }
        }
    }

</style>
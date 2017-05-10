<template>
    <div class="infinite-loading-container">
        <div v-show="isLoading">
            Loading....
        </div>
    </div>
</template>

<script>
    function getScrollParent(elm) {

        if (elm.tagName === 'BODY') {
            return window;
        } else if (['scroll', 'auto'].indexOf(getComputedStyle(elm).overflowY) > -1) {
            return elm;
        } else if (elm.hasAttribute('infinite-wrapper') || elm.hasAttribute('data-infinite-wrapper')) {
            return elm;
        }
        return getScrollParent(elm.parentNode);
    }
    function getCurrentDistance(elm) {
        let distance;
        const scrollTop = isNaN(elm.scrollTop) ? elm.pageYOffset : elm.scrollTop;

        const scrollElmHeight = elm === window ?
            window.innerHeight :
            elm.getBoundingClientRect().height;

        distance = this.$el.offsetTop - scrollTop - scrollElmHeight - (elm.offsetTop || 0);
        return distance;
    }
    export default {
        props:['distance'],
        data() {
            return {
                scrollParent: null,
                scrollHandler: null,
                isLoading: false,
                isComplete: false,
            };
        },
        mounted() {
            this.scrollParent = getScrollParent(this.$el);

            this.scrollHandler = function scrollHandlerOriginal() {
                if (!this.isLoading) {
                    this.attemptLoad();
                }
            }.bind(this);

            setTimeout(this.scrollHandler, 1);
            this.scrollParent.addEventListener('scroll', this.scrollHandler);

            this.$on('$InfiniteLoading:loaded', () => {
                this.isFirstLoad = false;
                if (this.isLoading) {
                    this.$nextTick(this.attemptLoad);
                }
            });
            this.$on('$InfiniteLoading:complete', () => {
                this.isLoading = false;
                this.isComplete = true;
                this.scrollParent.removeEventListener('scroll', this.scrollHandler);
            });
        },
        methods: {
            attemptLoad() {
                const currentDistance = getCurrentDistance.bind(this)(this.scrollParent, this.direction);
                if (!this.isComplete && currentDistance <= this.distance) {
                    this.isLoading = true;
                    this.$emit('onInfinite');
                } else {
                    this.isLoading = false;
                }
            },
        },
        destroyed() {
            if (!this.isComplete) {
                this.scrollParent.removeEventListener('scroll', this.scrollHandler);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
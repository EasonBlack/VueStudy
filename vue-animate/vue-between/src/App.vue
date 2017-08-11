<template>
	<div class='list__container'>
        <ul>
            <li @click="toggle('item1')">ITEM 1</li>
            <li @click="toggle('item2')">ITEM 2</li>
        </ul>
		<transition name="item-fade" mode="out-in">
            <component :is="view" />
        </transition>
	</div>
</template>

<script>
    import item1 from './item/item1.vue';
    import item2 from './item/item2.vue';
	export default {
	    components: {item1, item2},
		data() {
			return {
                view: 'item1'
			}
		},
		methods: {
            toggle(name) {
                this.view = name;
            }
		},
		computed: {

		}
	}
</script>
<style lang="scss" scoped>
    .item-fade-enter-active, .item-fade-leave-active {
        transition: opacity .3s ease;
    }
    .item-fade-enter, .item-fade-leave-to {
        opacity: 0;
    }
</style>
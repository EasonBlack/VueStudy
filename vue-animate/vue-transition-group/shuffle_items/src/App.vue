<template>
	<div class='list__container'>
		<transition-group name="item-list" tag="div">
            <item-div v-for='(item, index) in sortedItems' :key='item'
                :item="item" :index="index"
                @update='update'
            ></item-div>
        </transition-group>
	</div>
</template>

<script>
    import itemDiv from './item/index.vue';
	export default {
	    components: {itemDiv},
		data() {
			return {
			    items: [
			        {title: 'aa', num: 6},
			        {title: 'bb', num: 5},
			        {title: 'cc', num: 4},
			        {title: 'dd', num: 3},
			        {title: 'ee', num: 2},
			        {title: 'ff', num: 1}
			    ]
			}
		},
		methods: {
		    update(num, index) {
		        this.items[index].num = num;
		    }
		},
		computed: {
		    sortedItems() {
		        return this.items.sort((a,b)=> {
		            return a.num - b.num
		        })
		    }
		}
	}
</script>
<style lang='scss' scoped>
    .list__container {
    }
    .item-list-move {
        transition: transform 1s;
    }
</style>
<template>
	<div class='container'>
		<div class='row'>
			<div class='col-12'>
				<div class='desc-wrapper'>
					<div class='desc-item desc-title'>
						{{func.name}}({{func.params.join(',')}}) : 
					</div>
					<div v-for='(item, $index) in func.items' :key='$index' class='desc-item'>
						<span class='marker'
							:class='{
								"right icon-ok": item.expect == item.result,
								"pend  icon-minus-1": item.expect != item.result
							}'
						></span>
						<span>{{func.name}}({{item.params.join(',')}}) ths result should be {{item.expect}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class='row'>
			<div class='col-12 txt-wrapper'>
				<textarea v-model='txtFunc' />
				<span class='txt-begin'> function 	{{func.name}}({{func.params.join(',')}}) {</span>
				<span class='txt-end'> } </span>
				<button class='btn btn-primary' @click='execute'>Execute</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				txtFunc: '',
				func: {
					name: 'add',
					params: ['a', 'b'],
					items: [
						{expect: 7, params: [3,4], result: null},
						{expect: 10, params: [5,5], result: null}
					]
				}
			}
		},
		methods: {
			execute() {
				let _f = this.txtFunc;
				let _funcDetail = `function ${this.func.name}(${this.func.params.join(',')}){ ${_f}} `
				this.func.items.forEach(item=>{
					try {
						item.result = eval(_funcDetail + `${this.func.name}(${item.params.join(',')})`);
					} catch(e) {
						item.result = null;
					}
				
				})
				this.$forceUpdate();
			}
		}

	}
</script>
<style lang='scss' scoped>
	.container {
		padding-top:40px;
	}
	
	.desc-wrapper {
		margin-bottom:20px;
		.desc-item {
			height:30px;
			line-height:30px;
		}
		.desc-title {
			font-size: 1.5em;
			font-weight:bold;
		}
		.marker {
			display:inline-flex;
			justify-content:center;
			align-items: center;
			width:20px;
			height:20px;
			border-radius:50%;
			color: white;
			padding-left: 2px;
			padding-top: 1px;
			margin-right:10px;
		}
		.right {
			background-color: green;
		}
		.pend {
			background-color: red;
		}
	}
	
	.txt-wrapper {
		position:relative;
		.txt-begin {
			position:absolute;
			top:5px;
			left:5px;
			font-weight: bold;
		}
		.txt-end {
			position:absolute;
			bottom:10px;
			left:5px;
			font-weight: bold;
		}
		.btn {
			position:absolute;
			bottom: 10px ;
			right: 5px;
		}
		textarea {
			width:100%;
			height:100%;
			min-height:400px;
			resize: none;
			padding: 30px;
		}
	}
</style>
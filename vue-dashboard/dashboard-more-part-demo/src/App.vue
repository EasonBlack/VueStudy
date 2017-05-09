<template>
	<div class='main__container'>
	    <div class='row' v-for='m in mainMatrix'>
            <div class='part' v-for='p in m'></div>
	    </div>
	    <template v-for='(m, i) in centerMatrix'>
	        <div class='center-part' v-for='(p, j) in m'
	            :style="{ top: (25 + 50 *i)+'px', left: (25 + 50*j)+'px' }">
	        </div>
	    </template>

	</div>
</template>

<script>
    import circleSvg from './components/circleSvg.vue'
	export default {
        components:{circleSvg},
		data() {
			return {
			    matrix: [
			        [1,-1,1,-1,1,-1,1],
			        [-1,1,-1,1,-1,1,-1],
			        [1,-1,1,-1,1,-1,1],
			        [-1,1,-1,1,-1,1,-1],
			        [1,-1,1,-1,1,-1,1],
                    [-1,1,-1,1,-1,1,-1],
                    [1,-1,1,-1,1,-1,1]
			    ]
			}
		},
		computed: {
		    mainMatrix() {
		        let _mainMatrix = [];
		        this.matrix.forEach((m,i)=>{
		            if(i%2==0) {
		                _mainMatrix.push(m.filter(o=>o>0));
		            }
		        })
		        return _mainMatrix
		    },
		    centerMatrix() {
		        let _centerMatrix = [];
		        this.matrix.forEach((m,i)=>{
                    if(i%2==1) {
                        _centerMatrix.push(m.filter(o=>o>0));
                    }
                })
                return _centerMatrix
		    }
		}
	}
</script>
<style lang='scss' scoped>
    .row {
        width:100%;
        height:50px;
        display:flex;
    }
    .part {
        width:50px;
        height:50px;
        border:1px solid #ccc;
    }
    .center-part {
        width:50px;
        height:50px;
        border:1px solid steelblue;
        position:absolute;
    }
</style>
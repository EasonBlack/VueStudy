<template>
	<div class='main__container'>
	    <div class='row' v-for='(m,i) in mainMatrix'>
            <div class='part' v-for='(p,j) in m' @click='selectPart(i,j)'></div>
	    </div>
	    <template v-for='(m, i) in centerMatrix'>
	        <div class='center-part' v-for='(p, j) in m'
	            @click='selectCenterPart(i,j)'
	            :style="{ top: (50 *(i+1) - (30/2))+'px', left: ( 50*(j+1)-(30/2))+'px' }">
	        </div>
	    </template>
        <circle-svg
        :svgType='svgType'
        :w='w + "px"'
        :h='h+ "px"'
        :t='t+ "px"'
        :l='l+ "px"'
        :pi = 'pi'
        :pj = 'pj'
        @enlarge='enlarge'
        @ensmall='ensmall'
        ></circle-svg>
	</div>
</template>

<script>
    import circleSvg from './components/circleSvg.vue'
	export default {
        components:{circleSvg},
		data() {
			return {
			    svgType: 'normal',
			    partW: 50,
			    partH: 50,
			    pi: 0,
			    pj: 0,
			    w: 50,
			    h: 50,
			    t: 0,
			    l: 0,
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
		methods: {
		    selectPart(i,j) {
		        this.pi=i;
		        this.pj = j;
                this.t = (i) * this.partH;
                this.l= (j) * this.partW;
                this.svgType = 'normal';
		    },
		    selectCenterPart(i,j) {
		        this.pi=i;
            	this.pj = j;
                this.t = (this.partH *(i+1) - (this.h/2))
                this.l = (this.partW *(j+1) - (this.w/2))
                this.svgType = 'center';
		    },
		    enlarge() {
                if(this.svgType == 'normal') {
                    this.w = this.partW * 3;
                    this.h = this.partH * 3;
                    this.t -= this.partH;
                    this.l -= this.partW;
                } else {
                    this.w = this.partW * 2;
                    this.h = this.partH * 2;
                    this.t = (this.partH *(this.pi+1) - (this.h/2))
                    this.l = (this.partW *(this.pj+1) - (this.w/2))
                }
            },
            ensmall() {
                if(this.svgType == 'normal') {
                    this.w = this.w / 3;
                    this.h = this.h / 3;
                    this.t += this.partH;
                    this.l += this.partW;
                } else {
                    this.w = this.w / 2;
                    this.h = this.h / 2;
                    this.t = (this.partH *(this.pi+1) - (this.h/2))
                    this.l = (this.partW *(this.pj+1) - (this.w/2))
                }
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
    .main__container {
        position:relative;
    }
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
        width:30px;
        height:30px;
        border:1px solid steelblue;
        position:absolute;
    }
</style>
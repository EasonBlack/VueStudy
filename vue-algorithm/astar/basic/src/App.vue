<template>
    <div class='container'>
        <div class='row__container' v-for='i in grid.length'>
            <div class='cell__container' v-for='j in grid[i-1].length'
                 v-bind:class="{
                    block: grid[i-1][j-1] ==0,
                    start: i-1 ==start.y && j-1==start.x,
                    end: i-1==end.y && j-1==end.x
                }"
            >

            </div>
        </div>
        <div class='pach__cell' v-for='(p, index) in paths' v-if='paths.length'
             :style="{
                left: p.x * 51 + 'px',
                top: p.y *51 + 'px'
            }">
            {{index}}
        </div>
    </div>
</template>

<script>
    import Grid from './grid';
    import Astar from './astar';
	export default {
		data() {
			return {
			    grid: [
			        [1,1,1,1,1,1,1,1],
			        [1,1,1,1,0,0,0,1],
			        [1,1,0,1,0,1,1,1],
			        [1,1,0,1,1,1,1,1],
			        [1,1,0,1,1,1,1,1],
			        [1,1,0,1,0,0,0,1],
			        [1,1,1,1,1,1,1,1],
			        [1,1,1,1,1,1,1,1],
			    ],
			    paths: [],
			    start: {x:1, y:2},
			    end: {x:6, y:4}
			}
		},
		mounted: function() {
            this.gridInfo = new Grid(this.grid);
            this.paths = Astar.search(this.gridInfo, this.gridInfo.data[this.start.y][this.start.x], this.gridInfo.data[this.end.y][this.end.x]);
            console.log(_a);
		}
	}


</script>
<style lang='scss'>
    * {
        padding: 0;
        margin: 0;
    }

    .container {
        margin-top: 50px;
        margin-left: 50px;
        position: relative;
    }

    .row__container {
        display: flex;
        flex-direction: row;
        &:first-child {
            .cell__container {
                border-top: 1px solid rgba(grey, 0.3);
            }
        }

    }

    .cell__container {
        display: block;
        width: 50px;
        height: 50px;
        border-right: 1px solid rgba(grey, 0.3);
        border-bottom: 1px solid rgba(grey, 0.3);
        background-color: white;
        &:first-child {
            border-left: 1px solid rgba(grey, 0.3);
        }
        &.block {
            background-color: black;
        }
        &.start {
            background-color: lightcoral;
        }
        &.end {
            background-color: steelblue;
        }
    }

    .pach__cell {
        position: absolute;
        background-color: lightseagreen;
        display: block;
        width: 50px;
        height: 50px;
        border: 1px solid transparent;
    }
</style>

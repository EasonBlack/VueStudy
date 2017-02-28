<template>
    <div class='cascade__container'>
    	<div class='left__container'>
    		<div class='select__container' v-for='s in deepNum'>
    		    <select  v-model='selectValues[s]' v-if='s==1 || (selectValues[s-1] && selectValues[s-1].children) ' @change='changeHandle(s)'>
                    <option v-for='t in (s==1?items:selectValues[s-1].children)' :value='t'>{{t.title}}</option>
    		    </select>
    		</div>
    	</div>
    	<div class='right__container'>
    		<div class='action__container'>
    			<a>Search</a>
    		</div>
    	</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                selectValues: {},
                deepNum: 0,
                items: [
                    {id: 1, title: 'aaa', children: [
                        {id: 11, title: 'a11'},
                        {id: 12, title: 'a12' , children: [
                            {id: 21, title: 'a21'},
                            {id: 22, title: 'a2'}
                        ]},
                    ]},
                    {id: 2, title: 'bbb'},
                ]
            }
        },
        created: function() {
            this.getDeep = (items)=> {
                let level=1;
                for(let o of items) {
                    if(!o.children) continue;
                    let depth = this.getDeep(o.children) + 1;
                    level = Math.max(depth , level)
                }
                return level;
            }
            this.deepNum = this.getDeep(this.items);
            for(let i=0;i<this.deepNum;i++) {
                this.$set(this.selectValues, i, {});
            }
        },
        methods: {
            changeHandle: function(s) {
                for(let i=s;i<this.deepNum;i++) {
                   this.$set(this.selectValues, i+1, {});
                }
            }
        },
        watch: {
            selectValues: {
              handler: function (val, oldVal) {

              },
              deep: true
            }
        }

    }
</script>

<style lang='scss' scoped>
    .cascade__container {
     	display:flex;
    	border:1px solid rgba(grey,0.3);
    	border-radius :  5px;
    	height:100%;
    }

    .left__container {
     	flex :  1;
    	display :  flex;
    }

    .select__container {
    	display:flex;

    	width:100px;
    	height : 100%;
    	padding: 5px 10px;
    	select {
    	    width:100%;
    	}
    }

    .right__container {
     	width :  300px;
     	height:100%;
    }

    .action__container {
     	display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        padding-right:20px;
    	a {
            width: 60px;
            height: 30px;
            line-height: 30px;
            display: inline-block;
            text-align: center;
            border: 1px solid steelblue;
            border-radius: 3px;
            background-color: steelblue;
            color: white;
    	}
    }
</style>

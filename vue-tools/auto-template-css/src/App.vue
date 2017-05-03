<template>
	<div class='main__section'>
		<div class='input__section'>
            <div class="area__section">
                <textarea v-model='inputOrigin' @keydown='keydownHandle'></textarea>
            </div>
            <div class="pre__section">
                <ul class="tag__bar">
                    <li @click="tagSelect('html')" :class='{active: tagActive=="html"}'>Html</li>
                    <li @click="tagSelect('css')"  :class='{active: tagActive=="css"}'>Css</li>
                </ul>
                <div class="pre__content">
                    <div v-for="item in $data[tagActive]" @click="tagItemSelectHandle(item)">{{item}}</div>
                </div>
            </div>
        </div>
		<div class='display__section'>
            <div class='html__section'>
                <html-display :inputTags='inputTags' :tabnum='tabnum'></html-display>
            </div>
            <div class='css__section'>
                <css-display :inputTags='inputTags'></css-display>
            </div>

        </div>
	</div>
</template>

<script>
    import htmlDisplay from './html-display/index.vue';
    import cssDisplay from './css-display/index.vue';
    import tagMixin from './tag'
	export default {
        mixins: [tagMixin],
        components: {htmlDisplay, cssDisplay},
	    data() {
	    	return {
                inputOrigin: '',
                tabnum: {
                    0: '',
                    1: '\t',
                    2: '\t\t',
                    3: '\t\t\t',
                    4: '\t\t\t\t',
                    5: '\t\t\t\t\t',
                },
                tagActive: 'html'
	    	}
	    },
	    created: function() {
             this.checkTab = function(s, n) {
                let num = 0;
                for(let i=n;i>0;i--) {
                    if(s.indexOf(this.tabnum[i]) != -1) {
                        num = i;
                        break;
                    }
                }
                return num;
            },
            this.recodeTags = function(tags) {
                let prev = null;
                for(let i =0;i<tags.length;i++) {
                    let t = tags[i];
                    if(prev && t.num > prev.num) {
                        t.parent = prev.index;
                    } else if(prev && t.num == prev.num) {
                        t.parent = prev.parent;
                    } else if(prev && t.num < prev.num) {
                        let pid = prev.parent;
                        let p = tags.find(o=> {
                            return o.index == pid
                        })
                        console.log(p);
                        t.parent = p.parent!=undefined ? p.parent : p.index;
                    }
                    prev = t;
                }
                return tags;
            }
	    },
	    methods:  {
	        keydownHandle: function(e) {
	            let el = e.target;
                if(e.keyCode === 9)  {
                     var start = el.selectionStart;
                     var end = el.selectionEnd;
                     var value = el.value;

                     this.inputOrigin = this.inputOrigin.substring(0, start)
                                 + "\t"
                                 + this.inputOrigin.substring(end);

                     el.selectionStart = el.selectionEnd = start + 1;
                     e.preventDefault();
                }
	        },
            tagSelect: function(t) {
                this.tagActive = t;
            },
            tagItemSelectHandle(t) {
               let v =  this[t + 'Handle']()
               console.log(v);
            }
	    },
	    computed: {
            inputTags: function() {
                let initNum = 1;
                let lines = this.inputOrigin.split('\n');
                let seperators =[];
                while(this.inputOrigin.indexOf(this.tabnum[initNum])!=-1) {
                    initNum++;
                }

                let tags = lines.map((o, i)=> {
                    let num = this.checkTab(o, initNum);
                    let arr = o.trim().split('@');
                    let self = arr[0];
                    let selfArr = self.split('_')
                    let children = arr.slice(1,arr.length);
                    children = children.map((o)=> {
                        let _tempArr =  o.split('_');
                        return {
                            el: _tempArr[0],
                            css: _tempArr.slice(1,_tempArr.length)
                        }
                    });
                    return {
                        text: selfArr[0],
                        css: selfArr.slice(1,selfArr.length),
                        children: children,
                        num : num,
                        index: i
                    }
                })
                tags = this.recodeTags(tags);
                return tags;
            }
	    }
	}
</script>
<style lang='scss' scoped >
    .main__section {
        display:flex;
        widht:100vw;
        height:100vh;
        overflow:hidden;
        position:relative;
    }
    .input__section {
        width:60%;
        height:100%;
        border-right:1px solid rgba(grey,0.3);
        .area__section {
            height:50%;
            border-bottom:1px solid rgba(grey, 0.3);
        }
        .pre__section {
            height:50%;
            .tag__bar {
                width:100%;
                list-style:none;
                display:flex;
                border-bottom: 1px solid steelblue;
                li {
                    width:100px;
                    height:30px;
                    line-height:30px;
                    text-align:center;
                    border: 1px solid steelblue;
                    border-bottom:none;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    cursor: pointer;
                    margin-right:10px;
                    &:hover {
                        background-color: rgba(steelblue, 0.3);
                        color: white;
                    }
                    &.active {
                        background-color: rgba(steelblue, 0.9);
                        color: white;
                    }
                }
            }
        }
        textarea {
            width:100%;
            height:100%;
            padding:10px;
            resize:none;
            &:focus {
                outline:0;
            }
        }
    }
    .display__section {
        width:40%;
        height:100%;
    }
    .html__section {
        height:50%;
        padding:10px;
        overflow:auto;
        border-bottom:1px solid rgba(grey, 0.3);
    }
    .css__section {
        padding:10px;
        height:50%;
        overflow:auto;
    }

</style>
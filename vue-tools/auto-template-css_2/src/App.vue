<template>
	<div class='main__section'>
		<div class='input__section'>
            <div class="area__section">
                <textarea v-model='inputOrigin' @keydown='keydownHandle'></textarea>
            </div>
        </div>
		<div class='display__section'>
            <div class='html__section'>
                {{inputTags}}
                <!-- <html-display :inputTags='inputTags' :tabnum='tabnum'></html-display> -->
            </div>
            <div class='css__section'>
                <!-- <css-display :inputTags='inputTags'></css-display> -->
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
                inputOrigin: ''     
	    	}
	    },
	    created: function() {
            let content = "     div.container.d-flex.box__3wrapper:title='Name':value";
            this.classRegex = /\.([\w-]*)/g;
            this.tagRegex  = /^([\s\t]*)([\w]+)/;
            //this.paramRegex = new RegExp("\:([\w]+)[=]?[\'\"]?([\w]*)[\'\"]?");
            var classRes = content.match(this.classRegex);
            var tagRes = content.match( this.tagRegex);
            console.log(classRes);
            console.log(tagRes);

            // this.recodeTags = function(tags) {
            //     let prev = null;
            //     for(let i =0;i<tags.length;i++) {
            //         let t = tags[i];
            //         if(prev && t.num > prev.num) {
            //             t.parent = prev.index;
            //         } else if(prev && t.num == prev.num) {
            //             t.parent = prev.parent;
            //         } else if(prev && t.num < prev.num) {
            //             let pid = prev.parent;
            //             let p = tags.find(o=> {
            //                 return o.index == pid
            //             })
            //             console.log(p);
            //             t.parent = p.parent!=undefined ? p.parent : p.index;
            //         }
            //         prev = t;
            //     }
            //     return tags;
            // }
	    },
	    methods:  {
	        keydownHandle: function(e) {
	            let el = e.target;
                if(e.keyCode === 9)  {  //tab
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
	    },
	    computed: {
            inputTags: function() {
                if(!this.inputOrigin) return false;
                let lines = this.inputOrigin.split('\n');
                let tags = lines.map((o,i)=>{
                   
                    let classRes = o.match(this.classRegex);
                    let tagRes = o.match( this.tagRegex);
                    //console.log(classRes, tagRes)
                    if(tagRes && tagRes.length > 1){
                        let tags = tagRes[1];
                        console.log(encodeURI(tags).toString().split('%09'));
                    }
                   
                })

                return tags;
                // let tags = lines.map((o, i)=> {
                //     let num = this.checkTab(o, initNum);
                //     let arr = o.trim().split('@');
                //     let self = arr[0];
                //     let selfArr = self.split('_')
                //     let children = arr.slice(1,arr.length);
                //     children = children.map((o)=> {
                //         let _tempArr =  o.split('_');
                //         return {
                //             el: _tempArr[0],
                //             css: _tempArr.slice(1,_tempArr.length)
                //         }
                //     });
                //     return {
                //         text: selfArr[0],
                //         css: selfArr.slice(1,selfArr.length),
                //         children: children,
                //         num : num,
                //         index: i
                //     }
                // })
                // tags = this.recodeTags(tags);
                // return tags;
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
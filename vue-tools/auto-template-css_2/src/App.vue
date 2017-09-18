<template>
	<div class='main__section'>
		<div class='input__section'>
            <div class="area__section">
                <textarea v-model='inputOrigin' @keydown='keydownHandle'></textarea>
            </div>
        </div>
		<div class='display__section'>
            <div class='html__section'>{{inputTags}}
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
            //var classRes = content.match(this.classRegex);
            //var tagRes = content.match( this.tagRegex);          
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
                    let tagName='',tabNum=0;
                    if(tagRes) {
                        tagName = tagRes[2];               
                        tabNum = encodeURI(tagRes[1]).toString().split('%09').length - 1 ;
                    } 
                    if(tabNum < 0 ) tabNum = 0;                   
                    return {
                        tab: tabNum,
                        tag: tagName,
                        class: classRes && classRes.length ? classRes.map(c=>c.substring(1)) : []
                    }   
                })
                let result = ''
                let previousIndents = []
                for(let i = 0 ;i<tags.length ;i++) {
                    let tag = tags[i];
                    let tabNum = tag.tab;
                    let tagString = '';
                    let tabString = '';
                    if(tag.tag) {
                        tabString =  new Array(tabNum).fill().reduce((t,i)=>{return t+'\t'}, '');
                        tagString = `${tabString}<${tag.tag} class='${tag.class.join(",")}'>\n` ;
                    }
                    
                    while(previousIndents.length 
                        && (tag.tab<=previousIndents[previousIndents.length-1].tab || tag.tab==0)
                        ) {
                        let _last = previousIndents.pop();
                        let _lastTag = ''
                        _lastTag = new Array(_last.tab).fill().reduce((t,i)=>{return t+'\t'}, '');
                        result +=  `${_lastTag}</${_last.tag}> \n`
                    }
                   
                    previousIndents.push(tag)
                    result += tagString ; 
                }
                return result;
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
        white-space:pre-wrap;
    }
    .css__section {
        padding:10px;
        height:50%;
        overflow:auto;
    }

</style>
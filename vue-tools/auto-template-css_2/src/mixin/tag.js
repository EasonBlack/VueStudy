let mixin = {
    computed: {
        inputTags: function() {
            if (!this.inputOrigin) return false;
            let lines = this.inputOrigin.split('\n');
            let tags = lines.map((o, i) => {

                let classRes, classArr = [];
                while (classRes = this.classRegex.exec(o)) {
                    classArr.push(classRes[1])
                }

                let tagRes = o.match(this.tagRegex);
                let tagName = '', tabNum = 0;
                if (tagRes) {
                    tagName = tagRes[2];
                    tabNum = encodeURI(tagRes[1]).toString().split('%09').length - 1;
                }
                if (tabNum < 0) tabNum = 0;
                return {
                    tab: tabNum,
                    tag: tagName,
                    class: classArr
                }
            })
            let result = ''
            let previousIndents = []
            for (let i = 0; i < tags.length; i++) {
                let tag = tags[i];
                let tabNum = tag.tab;
                let tagString = '';
                let tabString = '';
                if (tag.tag) {
                    tabString = new Array(tabNum).fill().reduce((t, i) => { return t + '\t' }, '');
                    tagString = `${tabString}<${tag.tag} class='${tag.class.join(" ")}'>\n`;
                }

                while (previousIndents.length
                    && (tag.tab <= previousIndents[previousIndents.length - 1].tab || tag.tab == 0)
                ) {
                    let _last = previousIndents.pop();
                    let _lastTag = ''
                    _lastTag = new Array(_last.tab).fill().reduce((t, i) => { return t + '\t' }, '');
                    result += `${_lastTag}</${_last.tag}> \n`
                }

                previousIndents.push(tag)
                result += tagString;
            }
            return result;
        }
    }
}

export default mixin;
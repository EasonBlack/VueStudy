<template>
    <div class='display__wrapper'>{{displayTxt}}
    </div>
</template>

<script>

    export default{
        props: ['inputTags', 'tabnum'],
        data(){
            return{

            }
        },
        created: function() {
            this.buildTreeTag = (tag, tags) => {
                let _html = `${this.tabnum[tag.num || 0]}<div class='${tag.text}__container'>\n`;
                let id = tag.index;
                let children = tags.filter((o)=> {
                    return o.parent == id
                })
                tag.items =[...children];
                for(let i =0;i<children.length;i++) {
                    let currentTag = children[i];
                    let currentTagHtml = this.buildTreeTag(currentTag, tags);
                    _html += currentTagHtml;
                }
                for(let c of tag.children){
                    _html += this.tabnum[tag.num +1 ] + `<${c.el} />\n`
                }
                _html+= this.tabnum[tag.num] + '</div>\n';
                return _html;
            }
        },
        computed: {
            displayTxt: function() {
                let html = '';
                html = this.buildTreeTag(this.inputTags[0], this.inputTags);
                return html
            }
        }

    }

</script>

<style lang='scss' scoped>
    .display__wrapper {

        white-space:pre-wrap;
        overflow:auto;
    }
</style>

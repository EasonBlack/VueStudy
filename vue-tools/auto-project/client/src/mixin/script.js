let mixin = {
  computed: {
    inputScript: function () {
      if (!this.inputOrigin) return false;
      let reserveList = ["div", "span"];
      let lines = this.inputOrigin.split('\n');
      let tags = [];

      lines.forEach((o, i) => {
        let tagRes = o.match(this.tagRegex);
        let tagName = '';
        if (tagRes) {
            tagName = tagRes[2];
        }
        if(reserveList.indexOf(tagName)==-1 && tagName.trim()) {
          tags.push(tagName);
        }
      })

      let importString = '';
      let tagParams = []
      tags.forEach(tag=>{
        let tagParam = tag.split('-')[0] + tag.split('-').slice(1).map(o=>o.charAt(0).toUpperCase() + o.slice(1)).join('')
        tagParams.push(tagParam);
        importString +=`import ${tagParam} from './${tag}.vue' \n`
      })

      let componentsString = '';
      if(tags.length) {
        componentsString = `\tcomponents: { ${tagParams.join(',')}},\n`
      }
      
      let result = importString + '\n'
      + "export default { \n"
      +  componentsString 
      + "}\n";
      
      return result;
    }

  }
}
export default mixin;
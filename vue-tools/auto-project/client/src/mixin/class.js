let mixin = {
  computed: {
    inputClass: function () {
      if (!this.inputOrigin) return false;

      let result = '',
        classArr = [];

      let lines = this.inputOrigin.split('\n');
      lines.forEach((o, i) => {
        let classRes;
        while (classRes = this.cssRegex.exec(o)) {
       
          classArr.push({
            name: classRes[1],
            css: classRes[2].split(':').map(o=>{
              return {
                name: o.split('=')[0],
                value: o.split('=')[1]
              }
            })
          });
        }

      })

      classArr.forEach(c=>{
        result += `.${c.name}{ \n` 
        + c.css.reduce((t, o)=>{
          return t +=`\t${o.name} : ${o.value}; \n`
        }, '') 
        + `} \n`;
      })
    
      return result;
    }

  }
}
export default mixin;
<template>
    <div class='css__container'>{{displayTxt}}
    </div>
</template>

<script>

    export default{
        props: ['inputTags'],
        data(){
            return{
                msg:'hello vue'
            }
        },
        created: function() {
            this.recodeCss=(a, tab)=> {
                 let keyArray = a.split(':')[0];
                 let key = keyArray.split(/(?=[A-Z])/).map(o=> o.toLowerCase()).join('-');
                 console.log(key);
                 let _cssTxt = tab + `${key} :  ${a.split(':')[1]};\n\r`;
                 return _cssTxt;
            },
            this.buildCssArray= (tags) => {
                let _cssTxt = '';
                for(let o of tags){
                    _cssTxt +=`.${o.text}__container { \n\r `;
                    for(let a of o.css) {
                        _cssTxt += this.recodeCss(a, '\t');
                    }
                    for(let c of o.children){
                         _cssTxt += `\t${c.el} { \n\r`;
                         for(let a of c.css) {
                            _cssTxt += this.recodeCss(a, '\t\t');
                         }
                         _cssTxt += `\t}\n\r`;
                    }
                    _cssTxt += `} \n\r`
                }
                return _cssTxt
            }
        },
        computed: {
            displayTxt: function() {
                let html = '';
                html = this.buildCssArray(this.inputTags);
                return html
            }
        }
    }
</script>

<style lang='scss' scoped>
    .css__container {
        overflow:auto;
        white-space:pre-wrap;
    }
</style>

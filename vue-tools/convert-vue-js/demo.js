

const compiler = require('vue-template-compiler')

let content = `
<template>
    <div>Hello World</div>
</template>
<script>
    export default {
        name: 'xccvc'
    }
</script>
`


const parsed =  compiler.parseComponent(content);

//console.log(parsed);

const template = parsed.template ? parsed.template.content : '';
const script = parsed.script ? parsed.script.content : '';

const templateEscaped = template.trim().replace(/`/g, '\\`');
const scriptEscaped = script.replace(/export default ?\{/, `$&\n\ttemplate: \`\n${templateEscaped}\`,`)

console.log(scriptEscaped);
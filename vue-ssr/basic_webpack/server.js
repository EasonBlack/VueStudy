const express = require('express');
const app = express();

const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('./index.template.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
})

app.listen(8080)
app.get('*', (req, res) => {
    renderer.renderToString({}, (err, html) => {
        //console.log(html);
        res.end(html)
    })
});
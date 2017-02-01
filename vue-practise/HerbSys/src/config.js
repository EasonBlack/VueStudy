// export default  {
//     apiHost: 'http://localhost:3000/'
// }
let VueConfig = {}
VueConfig.install = function (Vue, options) {
    Vue.pconfig = options
}

export default VueConfig
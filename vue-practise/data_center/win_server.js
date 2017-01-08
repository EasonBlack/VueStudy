var Service = require('node-windows').Service;
var path = require('path')

// Create a new service object
var svc = new Service({
    name:'My Data Center',
    description: 'DC',
    script: path.join('./server.js')
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
    svc.start();
});

svc.install();
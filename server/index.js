var express = require('express');
var app = express();

var company = require('./api/company');
var website = require('./api/website');

app.use('/company',company);
app.use('/website',website);

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

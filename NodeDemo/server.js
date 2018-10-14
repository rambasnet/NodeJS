var http = require('http');
var fs = require('fs');
var dt = require('./datetime');


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello from server...<br />');
    res.write("Current date and time on the server: " + dt.myDateTime());
    res.end();
}).listen(8080);
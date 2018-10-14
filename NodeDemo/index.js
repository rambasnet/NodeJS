var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            res.write('404 Page Not found!');
            return res.end()
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
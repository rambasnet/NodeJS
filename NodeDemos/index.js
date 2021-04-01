var http = require("http");
var fs = require("fs");

const hostname = "127.0.0.1";
const port = "9999";

var server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("404 Page Not found!");
      return res.end();
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, err => {
  if (err) {
    console.log("error occured: ", err);
    throw err;
  }
  console.log(`Server running at http://${hostname}:${port}/`);
});

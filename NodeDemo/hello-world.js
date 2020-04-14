var http = require("http");
var dt = require("./datetime");

const hostname = "127.0.0.1";
const port = "9999";

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<h1> Hello from server...</h1>");
  response.write(`<p style="color: red"> Current date and time on the server: <strong> + 
    ${dt.myDateTime()} + </strong></p>`);
  response.end();
});

server.listen(port, hostname, err => {
  if (err) {
    console.log("error occured: ", err);
    throw err;
  }
  console.log(`Server running at http://${hostname}:${port}/`);
});

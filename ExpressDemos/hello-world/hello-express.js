var express = require("express");
var app = express();
const port = 9999;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

var server = app.listen(port, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});

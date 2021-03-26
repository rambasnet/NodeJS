//let express = require("express");
import express from 'express';
const app = express();
const port = 9999;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

let server = app.listen(port, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});

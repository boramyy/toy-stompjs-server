
const express = require("express");
const Stomp = require('@stomp/stompjs');

const app = express();


const SERVER_PORT = 3001;

app.get("/", (req, res) => {
  res.json({
    msg: `hello`
  });
});

app.listen(SERVER_PORT, () =>
  console.log(`server listening on part ${SERVER_PORT}, http://localhost:${SERVER_PORT}`)
);

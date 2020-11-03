
const express = require("express");
const WebSocketServer = require("ws").Server;

const SERVER_PORT = 3000;
const SOCKET_PORT = 15674;

const webSocketServer = new WebSocketServer({ port: SOCKET_PORT });
const app = express();
// const SOCKET_URL = "ws://localhost:15674";

webSocketServer.on("connection", function (ws) {
  ws.on("message", function (message) {
    console.log("Received: %s", message);
  });
});

app.get("/", (req, res) => {
  const returnData = {
    msg: `hello`
  }
  return res.status(200).json(returnData);
});

app.get("/send/:msg", (req, res) => {
  webSocketServer.clients.forEach(function each(client) {
    client.send(req.params.msg);
  });
  return res.status(200);
});

app.listen(SERVER_PORT, () =>
  console.log(`server listening on part ${SERVER_PORT}, http://localhost:${SERVER_PORT}`)
);

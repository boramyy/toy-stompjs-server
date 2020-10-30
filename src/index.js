
const express = require("express");
const WebSocketServer = require("ws").Server;

const SERVER_PORT = 3000;
const SOCKET_PORT = 15674;

const webSocketServer = new WebSocketServer({ port: SOCKET_PORT });


// const { Stomp } = require('@stomp/stompjs');

// Object.assign(global, { WebSocket: require('websocket').w3cwebsocket });
// if (typeof TextEncoder !== 'function') {
  //   const TextEncodingPolyfill = require('text-encoding');
  //   TextEncoder = TextEncodingPolyfill.TextEncoder;
//   TextDecoder = TextEncodingPolyfill.TextDecoder;
// }

// const SOCKET_URL = "ws://localhost:15674/ws";

const app = express();

webSocketServer.on("connection", function(ws) {
  ws.send("Hello! I am a server.");
  ws.on("message", function(message) {
    console.log("Received: %s", message);
  });
});

// const client = Stomp.client(SOCKET_URL);
// console.log(Stomp.client)
// const client = Stomp.overWS(SOCKET_URL);

// const headers = {
//   login: 'user1',
//   passcode: 'pw123',
//   'client-id': 'my-client-id'
// };

// const connectCallback = function() {
//   console.log('연결됨')
// };
// const errorCallback = function(error) {
//   alert(error.headers.message);
// };

// client.connect(headers, connectCallback, errorCallback);

app.get("/", (req, res) => {
  const returnData = {
    msg: `hello`
  }
  return res.status(200).json(returnData);
});

app.get("/send/:msg", (req, res) => {
  const options = {
    priority: 9
  }
  const sendData = {
    msg: req.params.msg
  }

  // webSocketServer.send("/stomp/test", options, sendData);
  console.log('webSocketServer', webSocketServer)

  // res.json({
  //   msg: `hello stomp`
  // });
});

app.listen(SERVER_PORT, () =>
  console.log(`server listening on part ${SERVER_PORT}, http://localhost:${SERVER_PORT}`)
);


const express = require("express");
const WebSocket = require('ws');
const { Stomp } = require('@stomp/stompjs');

const SERVER_PORT = 3001;
const SOCKET_URL = "ws://localhost:15674/ws";

const app = express();
const client = Stomp.client(SOCKET_URL);
console.log(client)
// const client = Stomp.overWS(SOCKET_URL);

const headers = {
  login: 'user123',
  passcode: 'pw123',
  // additional header
  'client-id': 'my-client-id'
};

const connectCallback = function() {
  console.log('연결됨')
};
const errorCallback = function(error) {
  // display the error's message header:
  alert(error.headers.message);
};

client.connect(headers, connectCallback, errorCallback);

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

  client.send("/stomp/test", options, sendData);

  res.json({
    msg: `hello stomp`
  });
});

app.listen(SERVER_PORT, () =>
  console.log(`server listening on part ${SERVER_PORT}, http://localhost:${SERVER_PORT}`)
);

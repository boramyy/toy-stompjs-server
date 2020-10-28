const express = require("express");
const app = express();

const SERVER_PORT = 3001;

app.get("/", (req, res) => {
  res.json({
    msg: `hello `
  });
});

app.listen(SERVER_PORT, () =>
  console.log(
    "\x1b[35m%s\x1b[0m",
    `server listening on part ${SERVER_PORT}, http://localhost:${SERVER_PORT}`
  )
);

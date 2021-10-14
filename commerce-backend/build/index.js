"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("newrelic");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

require("babel-polyfill");

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require("helmet");

var _helmet2 = _interopRequireDefault(_helmet);

var _api = require("./api");

var _api2 = _interopRequireDefault(_api);

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _socket = require("socket.io");

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Initializing main server
// const io = new Server()
var _process$env$PORT = process.env.PORT,
    PORT = _process$env$PORT === undefined ? 8000 : _process$env$PORT;


var httpServer = _http2.default.createServer(app);
var io = new _socket.Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use((0, _cors2.default)());
app.use((0, _helmet2.default)());

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));

app.use("/", _api2.default);

// Array consisting all of the chat messages b/w admin and customer
// const messages = [];

// httpServer.listen(PORT, () =>
//   console.log(`server started at http://localhost:${PORT}`)
// );
httpServer.listen(PORT, function () {
  console.log("server started at http://localhost:" + PORT);
});

// Ready to take ws request
io.on("connection", function (socket) {
  console.log("user connected");
  // Send the recieved msg from client to admin
  socket.on("user-msg", function (res) {
    res.socketid = (0, _uuid.v4)();
    io.emit("server-msg", res);
  });
  // Checking the typing state of the user and correspond according to that
  socket.on("user-typing", function (state) {
    // Show the typing state to another user except the one who's typing
    socket.broadcast.emit("show-typing", state);
  });
  // Send the message to user when any user gets disconnected
  socket.on("disconnect", function (reason) {
    return console.log(reason);
  });
});

exports.default = app;
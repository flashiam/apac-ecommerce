import "newrelic";
import express from "express";
import cors from "cors";
import "babel-polyfill";
import bodyParser from "body-parser";
import helmet from "helmet";
import api from "./api";
import http from "http";
// import { Server } from "socket.io";
const socket = require("socket.io");

const app = express();

// Initializing main server
// const io = new Server()
const { PORT = 3030 } = process.env;
const httpServer = http.Server(app);
const io = socket(httpServer, {
  cors: "*",
});

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", api);

// Array consisting all of the chat messages b/w admin and customer
// const messages = [];

// Ready to take ws request
io.on("connection", socket => {
  // Send the recieved msg from client to admin
  socket.on("user-msg", res => {
    io.emit("server-msg", res);
  });
  // Send the recieved msg from admin to client
  // socket.on("admin-msg", res => {
  //   socket.broadcast.emit("chat-msg", res);
  // });
});

httpServer.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`)
);
// app.listen(PORT, () => {
//   console.log(`server started at http://localhost:${PORT}`);
// });

export default app;

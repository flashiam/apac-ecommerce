import "newrelic";
import express from "express";
import cors from "cors";
import "babel-polyfill";
import bodyParser from "body-parser";
import helmet from "helmet";
import api from "./api";
import http from "http";
import { Server } from "socket.io";
import { v4 as uuidV4 } from "uuid";

const app = express();

// Initializing main server
// const io = new Server()
const { PORT = 8000 } = process.env;

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", api);

// Array consisting all of the chat messages b/w admin and customer
// const messages = [];

// httpServer.listen(PORT, () =>
//   console.log(`server started at http://localhost:${PORT}`)
// );
httpServer.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

// Ready to take ws request
io.on("connection", socket => {
  console.log("user connected");
  // Send the recieved msg from client to admin
  socket.on("user-msg", res => {
    res.socketid = uuidV4();
    io.emit("server-msg", res);
  });
  // Checking the typing state of the user and correspond according to that
  socket.on("user-typing", state => {
    // Show the typing state to another user except the one who's typing
    socket.broadcast.emit("show-typing", state);
  });
  // Send the message to user when any user gets disconnected
  socket.on("disconnect", reason => console.log(reason));
});

export default app;

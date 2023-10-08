import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Server from 'socket.io';
import http from 'http';

import "./env/env.js";
import Whiteboard from "./db/whiteboard.js"
import whiteboardRoutes from "./routes/whiteboard.js";

const PORT = process.env.PORT || 8000
const app = express()
const server = http.createServer(app)
// const io = new Server(server)

const db = new Whiteboard()

const clients = {}

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use("/whiteboard", whiteboardRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
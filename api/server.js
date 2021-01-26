const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// define routers
const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");

// server.use routers
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

// default endpoint
server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;

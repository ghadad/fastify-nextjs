const express = require("express");
const path = require("path");
const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const pathMatch = require("path-match");
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require("url");
const { join } = require("path");
const compression = require("compression");

const server = express();
const route = pathMatch();
server.use(compression());
server.use("/_next", express.static(path.join(__dirname, ".next")));
server.get("/", (req, res) => app.render(req, res, "/"));
server.get("/service-worker.js", (req, res) => {
  const path = join(__dirname, ".next", "service-worker.js");
  res.sendFile(path);
});
server.get("/hello", (req, res) => app.render(req, res, "/hello"));
server.get("/hello/:sub", (req, res) => {
  const params = route("/hello/:sub")(parse(req.url).pathname);
  return app.render(req, res, "/hello/_sub", params);
});
server.get("/login", (req, res) => app.render(req, res, "/login"));
server.get("*", (req, res) => handle(req, res));

module.exports = server;

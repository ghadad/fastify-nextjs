"use strict";

const fastify = require("fastify")();

fastify.register(require("./app")).after(() => {
  fastify.next("/");
  fastify.next("/hello", (app, req, reply) => {
    app.render(req.raw, reply.res, "/hello", req.query, {});
  });
});

fastify.listen(3000, err => {
  if (err) throw err;
  console.log("Server listenging on http://localhost:3000");
});

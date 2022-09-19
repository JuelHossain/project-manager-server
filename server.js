const auth = require("json-server-auth");
const jsonServer = require("json-server");
const cors = require("cors");
const port = process.env.PORT || 9000;

const server = jsonServer.create();
server.use(cors());
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Bind the router db to the app
server.db = router.db;

const rules = auth.rewriter({
  users: 640,
  teams: 660,
  projects: 660,
});
server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);

server.listen(port);

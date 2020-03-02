var jsonServer = require("json-server");
var database = require("./database.json");
var port = 4000;

var router = jsonServer.router(database);
var server = jsonServer.create();

const middlewares = jsonServer.defaults({ static: "./assets" });

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log("Server is running at port " + port);
});

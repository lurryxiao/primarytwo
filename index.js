var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.login;
handle["/login"] = requestHandlers.login;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/trys"] = requestHandlers.trys;

server.start(router.route, handle);
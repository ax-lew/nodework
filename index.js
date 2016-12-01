var http = require("http");

var server = http.createServer();

server.on("request", function(req,res){
	res.end("Hola, mundo");


})

server.listen(8080);
var http = require("http");

var server = http.createServer();

server.on("request", function(req,res){
	res.write(JSON.stringify(getDateNow()) + "\n");
	res.end("Hola, mundo");
})

server.listen(8080);

function getDateNow(){
	var now = new Date();
	return now;
}
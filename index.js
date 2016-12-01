var http = require("http");
var url = require("url");

var server = http.createServer();

server.on("request", function(req,res){
	res.write(JSON.stringify(getDateNow()) + "\n");
	var urlData = url.parse(req.url,true);
	res.write(JSON.stringify(urlData) + "\n");
	res.end("Hola, mundo");
})

server.listen(process.env.PORT || 8080);

function getDateNow(){
	var now = new Date();
	return now;
}
var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer();

server.listen(process.env.PORT || 3000);

function getDateNow(){
	var now = new Date();
	return now;
}

server.on("request", function(req,res){
	res.write(JSON.stringify(getDateNow()) + "\n");
	var urlData = url.parse(req.url,true);
	var path = urlData["pathname"];
	
	

	res.write(JSON.stringify(path) + "\n");
	res.end("Hola, mundo");
})



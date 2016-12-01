var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer();

server.on("request", function(req,res){
	res.write(JSON.stringify(getDateNow()) + "\n");
	var urlData = url.parse(req.url,true);
	var path = urlData["pathname"];
	
	fs.readdir("../public/", function(err, items) {
		//console.log(items);
		for (var i=0; i<items.length; i++) {
			if(path == items[i]){
				res.write("Anda" + "\n");
			}
			
		}
	});

	res.write(JSON.stringify(path) + "\n");
	res.end("Hola, mundo");
})




server.listen(process.env.PORT || 8080);

function getDateNow(){
	var now = new Date();
	return now;
}
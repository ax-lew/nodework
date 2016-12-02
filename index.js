var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer();

server.listen(process.env.PORT || 3000);

function getDateNow(){
	var now = new Date();
	return now;
}


function leerArchivo(path,res){
	fs.readFile(path, function(err,data){
		if (err){
			res.writeHead(500);
			res.end("Algo salio mal");
		} else{
			res.write(data);
			res.end();
		}
	})
}

function error404(res){
	fs.readFile("img/Error404.png", function(err,data){
		if (err){
			res.writeHead(500);
			res.end("Algo salio mal");
		} else{
			res.write(data);
			res.end();
		}
	})
}

server.on("request", function(req,res){
	//res.write(JSON.stringify(getDateNow()) + "\n");
	var urlData = url.parse(req.url,true);
	var path = urlData.pathname;
	
	if (path != "/favicon.ico"){
		fs.exists("public" + path, function (exist) {
			if (exist) {
				leerArchivo("public" + path,res);
			} else {
				error404(res);
			}
			
		})
	}

	

	//res.write(JSON.stringify(path) + "\n");
	//res.end("Hola, mundo");
})



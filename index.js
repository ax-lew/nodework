var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer();
server.listen(process.env.PORT || 3000);


var cantVisitas = 0;
var listaIPs =[];

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
		res.writeHead(404);
		res.write(data);
		res.end();
	})
}

function contarCantVisitas(path){
	if (path == "/index.html"){
		cantVisitas++;
	}
}

function agregarIP(req){
	listaIPs.push(req.connection.remoteAddress);
	return;
}

server.on("request", function(req,res){
	//res.write(JSON.stringify(getDateNow()) + "\n");
	var urlData = url.parse(req.url,true);
	var path = urlData.pathname;

	if(path == "/asd"){
		res.write(JSON.stringify(cantVisitas) + "\n" + JSON.stringify(listaIPs) + "\n");
		res.end("Hola, mundo");
		return;
	}
	
	if (path != "/favicon.ico" && path != "/"){
		fs.exists("public" + path, function (exist) {
			if (exist) {
				//cantVisitas++;
				contarCantVisitas(path);
				agregarIP(req);
				//console.log(path);
				leerArchivo("public" + path,res);
			} else {
				error404(res);
			}
			
		})
		return;
	}

	//res.write(JSON.stringify(path) + "\n");
	res.end("Hola, mundo");
})



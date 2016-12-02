window.onload = function() {
	//alert('El que no salta, abandonooo');
	var today = new Date()
	var dia =  today.getDate();
	var mes = today.getMonth();
	var año = today.getFullYear();
	var hoy = dia + '/' + mes + '/' + año;
	document.getElementById("date").innerHTML = hoy;

	
	//var artic = new Articulo('asdasd','asdklad askjdgsd dh ads');
	//document.getElementById("aaa").innerHTML = artic.render();
	
	manejador.load();
	manejador.render();
}


var alto = "64px";
var ancho = "64px";
var abrirEnOtra = true;
var manejador = new ManejadorArticulos("noticias");

function bigImg(x) {
	alto =  x.style.height;
	ancho = x.style.width;
    x.style.height = "100px";
    x.style.width = "300px";
}

function normalImg(x) {
    x.style.height = alto;
    x.style.width = ancho;
}


function leerNoticia(link){
	if (abrirEnOtra){
		window.open(link,"_self");
	} else {

	}

}

function next(x){
	if(manejador.desde + manejador.cantArtMax > manejador.articulos.length){
		return;
	}
	manejador.desde += manejador.cantArtMax;
	manejador.render()
	
}

function previous(){
	manejador.desde = Math.max(manejador.desde - manejador.cantArtMax, 0);
	manejador.render();
}


function ManejadorArticulos(dnd){
	this.articulos = [];
	this.cantArtMax = 3;
	this.desde = 0;
	this.where = dnd
	this.load = function(){
		var artic = new Articulo('Titulo','Contenido sobre la noticia','noticias/noticia.html');
		var artic2 = new Articulo('D\'alessandro vuelve al once inicial?','Rodrigo Mora y el "cabezón" luchan por un puesto en el equipo, de cara al encuentro del jueves','noticias/noticia.html');
		var artic3 = new Articulo('asdasdasd','asdasd','noticias/noticia.html');
		var artic4 = new Articulo('klsdasdf','sdfsdg','noticias/noticia.html');
		this.articulos.push(artic);
		this.articulos.push(artic2);
		this.articulos.push(artic3);
		this.articulos.push(artic4);
	}
	this.render = function(){
		var aImprimir = "";
		for (var i = this.desde; i < Math.min(this.articulos.length,this.desde+this.cantArtMax) ; i++) {
			aImprimir += this.articulos[i].render();
		}
		document.getElementById(this.where).innerHTML = aImprimir;
		return;
	}
}


function Articulo(titulo,contenido, link){

	this.titulo = titulo;
	this.contenido = contenido;
	this.link = link;

	this.render = function(){
		//return '<a href=' + this.link + '> <div class="title" >' + this.titulo + '</div> </a> <div class="resumen">' + this.contenido + '</div>';
		//return '<div> <div class="title" onclick="leerNoticia(\'noticias/river-huracan.html\')">' + this.titulo + '</div> <div class="resumen">' + this.contenido + '</div> </div>';
		return '<div> <div class="title" onclick="leerNoticia(\'' + this.link + '\')">' + this.titulo + '</div> <div class="resumen">' + this.contenido + '</div> </div>';
	}
}
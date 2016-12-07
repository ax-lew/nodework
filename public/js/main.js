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
		ocultar();
		manejador.renderNoticia(link);
	}

}

function ocultar(){
	document.getElementById("pasarPagina").style.display = "none";
	document.getElementById("volver").style.display = "block";
}

function mostrar(){
	document.getElementById("pasarPagina").style.display = "block";
	document.getElementById("volver").style.display = "none";
}


function volver(){
	manejador.render();
	mostrar();
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
		var artic = new Articulo('River ganó y llegó a su octava final con Gallardo','El Millonario fue claramente superior, marcó la diferencia antes de irse al descanso y, gracias a los goles de Driussi y Alario, se impuso 2-0 sobre Gimnasia y Esgrima La Plata para acceder por primera vez en su historia a la instancia decisiva de la Copa Argentina. Así no sólo puede obtener un trofeo inédito, sino también clasificarse a la Libertadores.','noticias/river-gimnasia.html');
		var artic2 = new Articulo('D\'alessandro vuelve al once inicial?','Rodrigo Mora y el "cabezón" luchan por un puesto en el equipo, de cara al encuentro del jueves','noticias/noticia.html');
		
		var artic3 = new Articulo('Maidana afuera de la semifinal.','El central millonario no se pudo recuperar de su lesión y de esta manera, se pierde el encuentro contra Gimnasia.','noticias/maidana-semifinal.html');
		var artic4 = new Articulo('Resumen: River 1 - Huracan 0.','No se jugó bien, pero se pudo ganar. Eso es lo que importa. Ahora, a prepararse para la final del jueves.','noticias/river-huracan.html');


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
	this.renderNoticia = function(link){
	
		for (var i = 0; i < this.articulos.length; i++) {
			if (this.articulos[i].link == link){
				var aMostrar = this.articulos[i];
				document.getElementById(this.where).innerHTML = aMostrar.render();
				return;
			}
		}
	}
}


function Articulo(titulo,contenido, link){

	this.titulo = titulo;
	this.contenido = contenido;
	this.link = link;

	this.render = function(){
		return '<div> <div class="title" onclick="leerNoticia(\'' + this.link + '\')">' + this.titulo + '</div> <div class="resumen">' + this.contenido + '</div> </div>';
	}
}
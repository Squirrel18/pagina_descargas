var datoJson;
var plataforma = navigator.platform;
var a = navigator.userAgent.toLowerCase();
var android = a.indexOf("android") > -1;
var rutas = new Array(4);
var datosIngre;
var datos;
var pass;
var datoVacio = false;

function loadPage(dato) {
	var id = dato;
	var webMethod = "php/Services.php";
	var parameters = {id_desing:id};
    
	$.ajax({
		type:"GET",
		url:webMethod,
		data:parameters,
		contentType:"application/json; charset=utf-8",
		dataType:"json",
		success: function(msg){
			objeto(msg);
		},
		error:function(e){
				alert("Error ajx");	
		}
	});
}

function objeto(dato) {
	datoJson = dato;
    compruebaMovil();
}

$(document).ready(function() {
    //parametroUrl();
});

function parametroUrl() {
    var url = document.URL;
    var index = url.indexOf("?");
    var datoUrl = url.substring(index + 1, url.length);
    loadPage(datoUrl);
}

function compruebaMovil() {
    if(datoJson.Windows == "" || datoJson.Mac == "") {
        datoVacio = true;
        alert("Está aplicación no está disponible para está plataforma.");
        window.location.assign("http://www.creative-med.com");
    } else {
        asignDatos();
    }

    if(android) {
        window.location.assign(rutas[2]);
    } else {
        switch(plataforma) {
            case "iPad": 
                window.location.assign(rutas[3]);
                break;
            case "iPhone":
                window.location.assign(rutas[3]);
                break;
            default: //alert("Ocurrio un error");
        }
    }
}

function asignDatos() {
    var contendor = document.getElementById("contenedor");
    var imgPrinci = document.getElementById("imgPrincipal");
    var titulo = document.getElementById("titulo");
    var subTitulo = document.getElementById("subtitulo");
    var passF = document.getElementById("inputPass");
    var btn = document.getElementById("boton");
    var imgNube = document.getElementById("imgNube");
    var codLab = document.getElementById("codigoLab");

    rutas[0] = datoJson.Windows;
    rutas[1] = datoJson.Mac;
    rutas[2] = datoJson.Android;
    rutas[3] = datoJson.iPad;

    contendor.style.background = datoJson.Color;
    imgPrinci.setAttribute("src", "assets/" + datoJson.Image);
    titulo.innerText = datoJson.Title;
    pass = datoJson.Password.toLowerCase();

    if(datoJson.Text_code == "") {
        codLab.style.display = "none";
    } else {
        codLab.innerText = datoJson.Text_code;
    }

    //true es el color de fondo oscuro
    if(parseInt(datoJson.Background) == 1) {
        titulo.classList.add("tituloB");
        subTitulo.classList.add("subtituloB");
        passF.classList.add("inputPassB");
        btn.classList.add("botonB");
        imgNube.setAttribute("src", "assets/nubeB.png");
        codLab.classList.add("codigoLabB");
        
    } else {
        titulo.classList.add("tituloN");
        subTitulo.classList.add("subtituloN");
        passF.classList.add("inputPassN");
        btn.classList.add("botonN");
        imgNube.setAttribute("src", "assets/nubeN.png");
        codLab.classList.add("codigoLabN");
    }
}

function descarga() {
    var valor = document.getElementById("inputPass").value;

    if(valor == "") {
        crearTexto(0);
    } else if(valor != "") {
        if(valor.toLowerCase() == pass) {
            dispositivo();
        } else {
            crearTexto(1);
        }
    }
}

function dispositivo() {
    var descarga = document.getElementById("linkDescarga");
    switch(plataforma) {
        case "Win32":
            descarga.setAttribute("href","download/" + rutas[0]);
            break;
        case "MacIntel":
            descarga.setAttribute("href","download/" + rutas[1]);
            break;
        default: alert("Ocurrio un error");
    }
    var Event = new MouseEvent('click');
    descarga.dispatchEvent(Event);
}

function crearTexto(dato) {
    var comprueba;
    if(!document.getElementById("textoAlert")) {
        var p = document.createElement("p");
        p.id = "textoAlert";
        if(datoVacio == true) {
            p.className = "textoAlertB";
        } else {
            if(parseInt(datoJson.Background) == 0) {
                p.className = "textoAlertN";
            } else {
                p.className = "textoAlertB";
            }
        }
        document.getElementById("contIzq").appendChild(p);
        switch(dato) {
            case 0:
                p.innerText = "El campo está vacío";
                break;
            case 1:
                p.innerText = "Contraseña incorrecta, digite nuevamente.";
                p.style.top = "395px";
                break;
            default: alert("Ocurrio un error");
        }
        comprueba = true;
    }
    if(comprueba == true) {
        setTimeout(function() {
            document.getElementById("textoAlert").remove();
        }, 2500);
        comprueba = false;
    }
}

function downloadAction() {
    let inputField = document.querySelector("#inputPass");
    checkPlatform();
}

function checkPlatform() {
    let mobile = new RegExp("iPhone|iPad|Android", "i");
    let desktop = new RegExp("macintosh|windows", "i")
    let isMobile = (mobile.test(navigator.userAgent));
    let isDesktop = (desktop.test(navigator.userAgent));
    let platform = isMobile ? navigator.userAgent.match(mobile) : navigator.userAgent.match(desktop);
    console.log(`${platform}`);
}

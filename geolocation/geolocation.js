function iniciar() {
    var boton = document.getElementById('obtener');
    boton.addEventListener('click', obtener, false);
}

function obtener() {
    var geoconfig = {
        enableHighAccuracy: true,
        maximumAge: 60000
    };
    control = navigator.geolocation.watchPosition(mostrar, errores, geoconfig);
}

function mostrar(posicion) {
    var ubicacion = document.getElementById('ubicacion');
    var datos = '';
    datos += 'Latitud: ' + posicion.coords.latitude + '<br>';
    datos += 'Longitud: ' + posicion.coords.longitude + '<br>';
    datos += 'Exactitud: ' + posicion.coords.accuracy + 'mts.<br>';
    ubicacion.innerHTML = datos;

    var mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=" + posicion.coords.longitude + ","+ posicion.coords.latitude 
    + "&layer=mapquest&marker=" + posicion.coords.latitude + "," + posicion.coords.longitude;

    var mapa = document.getElementById('mapa');
    mapa.innerHTML = '<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + mapUrl + '"></iframe>';
}

function errores(error) {
    alert('Error: ' + error.code + ' ' + error.message);
}

window.addEventListener('load', iniciar, false);
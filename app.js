const axios = require('axios');
// llamada a las clases para utilizar los metodosexistentes dentro de ello
const ubicacion = require('./controlador/ubicacion');
const clima = require('./controlador/clima');
//utilizamos yargs el cual es un moduo que nos permite realizar ejecuciones de comandos personalizados por la terminal
const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// ubicacion.getCiudadLatLon(argv.nombre)
//     .then(console.log);

// clima.getClima(-0.19, -78.5)
//     .then(console.log);

// funcion flecha en donde recive como paramnetro ciudad para obtener la longitud y la latitud para luego obtener el clima
const getInfo = async(ciudad) => {
    try {
        const coords = await ubicacion.getciudadLatLon(ciudad);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${ coords.name } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ ciudad } ${e}`;
    }
}

// llamada del metod para la ejecucion del metodo.
getInfo(argv.nombre)
    .then(console.log)
    .catch(console.log);
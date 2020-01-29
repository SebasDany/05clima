const axios = require('axios');

// aqui declaramos una funcion flecha asicrona el cual permite esperar aun hasta que un determinado proceso nos devuelva algun valor 
const getciudadLatLon = async(nombre) => {

    const ciudad = encodeURI(nombre)
//El modulo Axios permite realizar solicitudes a un servidor
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: { 'X-RapidAPI-Key': 'fe20c29bd7msh4eca77c6a92a9dfp1cf8e1jsn0fdb42b5f2dd' } //clave otorgada para la realizar el uso de la api
    });
//utilizamos el await para esperar hasta que nos devuelva una respuesta y luego continusl con los demas procesos
    const resp = await instance.get();
    console.log(resp);
// validacion de la respuesta si el resultado es igual a cero que nos muestre un mensaje
    if (resp.data.Results.length === 0) {
        throw new Error(`No existe resultados para ${nombre}`);
    }
//toma de los datos que remos obtener desde un conjunto de objetos que nos devuelve la consulta
    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        name,
        lat,
        lon
    }

    // instance.get()
    //     .then((resp) => {
    //         console.log(resp.data.Results[0]);
    //     }).catch((err) => {
    //         console.log("Error", err);
    //     });

}
//permitimos que estas funciones puedan seer llamadas desde otaras clases
module.exports = {
    getciudadLatLon
}
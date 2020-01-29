const axios = require('axios');
//aqui  creamos una funcion asincrona en el cual recibe como parametros la longitud y la latitud para obtener el clima de un lugar determinado
const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac7eaef281e24b3e15ae43d9c6ee567d&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
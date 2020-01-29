## Apicacion del clima

Para instalar las dependencias ejecutar :
npm install

Para poder realizar el uso de esta api crear una cuenta en :
https://openweathermap.org/

Dentro de la clase ubicacion.js  estan los metodos que nos devuelven la ubicacion del lugar como la latitud y la longitud.

Dentro de la clase clima.js creamos una funcion asincrona en el cual recibe como parametros la longitud y la latitud para obtener el clima de un lugar determinado.

Dentro de la clase app.js hace la llamda de los metodos de las otrs clases para obtener el clima.

Para ejcutar la aplicacion ejecutar de la siguinete manera : 
node app -n Quito
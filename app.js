const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direcion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

//lugar.getLugarLatLng(argv.direccion).then(console.log);

//clima.getClima(40.42, -3.7).then(console.log).catch(console.log);

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);

        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${direccion.green} es de ` + temp + ' con las coordenadas latitud: ' + coords.lat + ' y longitud: ' + coords.lng;

    } catch (error) {
        return `No se pudo determninar el clima de ${direccion.red}`;
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);
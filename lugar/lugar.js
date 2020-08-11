const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUlr = encodeURI(dir);
    console.log(encodeUlr);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeUlr}&appid=6cf9ae4a4401bdecf01c6d2cce10b202`);
    /*const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'X-RapidAPI-Key': '4c0f53cd8fmshec43c391424ed17p1cb9f6jsn8c991163f38d' }
    });

    const resp = await instance.get();

    if (resp.data.Results === null) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    */
    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
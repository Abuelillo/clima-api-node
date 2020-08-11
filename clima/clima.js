const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6cf9ae4a4401bdecf01c6d2cce10b202&units=metric`);

    let temp = resp.data.main.temp;
    return temp;
}


module.exports = {
    getClima
}
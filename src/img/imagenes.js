import dayClear from './day-clear.png'
import dayClouds from './day-clouds.png'
import dayRain from './day-rain.png'
import daySnow from './day-snow.png'
import dayStorm from './day-storm.png'
import dayWind from './day-wind.png'

import nightClear from './night-clear.png'
import nightClouds from './night-clouds.png'
import nightRain from './night-rain.png'
import nightSnow from './night-snow.png'
import nightStorm from './night-storm.png'
import nightWind from './night-wind.png'

const getImageAndColor = (sunWeather, id) => {
    const result = {};
    if(sunWeather){
        if (id >= 200 && id < 300) {
            result.color = '#562e6a',
            result.image = dayStorm;
        }else if(id >= 300 && id < 600){
            result.color = '#6694ac',
            result.image = dayRain;
        }else if(id >= 600 && id < 700){
            result.color = '#0a708e',
            result.image = daySnow;
        }else if(id >= 700 && id < 800){
            result.color = '#41b4ee',
            result.image = dayWind;
        }else if(id === 800){
            result.color = '#fc9424',
            result.image = dayClear;
        }else if(id >= 801 && id < 900){
            result.color = '#b1c9d8',
            result.image = dayClouds;
        }else{
            result.color = '#000',
            result.image = 'No esta dentro de los resultados';
        }
    }else{
        if (id >= 200 && id < 300) {
            result.color = '#562e6a',
            result.image = nightStorm;
        }else if(id >= 300 && id < 600){
            result.color = '#6694ac',
            result.image = nightRain;
        }else if(id >= 600 && id < 700){
            result.color = '#0a708e',
            result.image = nightSnow;
        }else if(id >= 700 && id < 800){
            result.color = '#41b4ee',
            result.image = nightWind;
        }else if(id === 800){
            result.color = '#fc9424',
            result.image = nightClear;
        }else if(id >= 801 && id < 900){
            result.color = '#b1c9d8',
            result.image = nightClouds;
        }else{
            result.color = '#000',
            result.image = 'No esta dentro de los resultados';
        }
    }
    return result;
}

export default getImageAndColor;
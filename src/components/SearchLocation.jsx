import { useEffect, useState } from "react";
import axios from 'axios'
import Location from "./Location";
import Error from "./Error";
import { fechaActual } from '../helpers/index.js';
import imageAndColor from '../img/imagenes.js';

const SearchLocation = ({setPrincipalData, setSection, isDayOrNight, setIsDayOrNight }) => {
    const [location, setlocation] = useState('');
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState(false);

    const dayOrNightLocation = (dt, sunrise, sunset) => {
        if(dt >= sunrise && dt <= sunset){
            return true;
        }else{
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(location){
            const API_KEY = 'f4242e9427fbc4148e47904dfd242342'
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
            axios.get(url)
            .then(res => {
                const datosPrimordiales = {
                location: `${res.data.name}, ${res.data.sys.country}`,
                fecha: fechaActual(),
                id: res.data.id,
                temperature: `${(res.data.main.temp - 273.15).toFixed(2)}°C`,
                feelsLike: `${(res.data.main.feels_like - 273.15).toFixed(2)}°C`,
                idDescription: res.data.weather[0].id,
                weatherDescription: `${res.data.weather[0].main}, ${res.data.weather[0].description}`,
                dt: res.data.dt,
                sunrise: res.data.sys.sunrise,
                sunset: res.data.sys.sunset,
                windSpeed: res.data.wind.speed,
                clouds: res.data.clouds.all,
                pressure: res.data.main.pressure,
                humidity: res.data.main.humidity
                }
                datosPrimordiales.color = imageAndColor(dayOrNightLocation(datosPrimordiales.dt, datosPrimordiales.sunrise, datosPrimordiales.sunset), datosPrimordiales.idDescription).color;
                datosPrimordiales.image = imageAndColor(dayOrNightLocation(datosPrimordiales.dt, datosPrimordiales.sunrise, datosPrimordiales.sunset), datosPrimordiales.idDescription).image;
                setLocations([...locations, datosPrimordiales]);
            })
            .catch(error => {
                console.log(error)
                setError(true)
                setTimeout(() => {
                    setError(false);
                }, 1500)
            })
        }
    }

    useEffect(() => {

    }, [])

  return (
    <main className="searcher">
        {error && <Error>Lugar no valido</Error>}
        <form className="searcher__input">
            <p
            style={isDayOrNight ? {color: '#000'} : {color: '#fff'}}
            >Busqueda por pais o ciudad</p>
            <input 
            style={isDayOrNight ? {color: '#000'} : {color: '#fff'}}
            onChange={e => setlocation(e.target.value)}
            type="text"
            />
            <input 
            style={isDayOrNight ? {color: '#000'} : {color: '#fff'}}
            type="submit" 
            value={'Buscar'}
            onClick={handleSubmit}
            />
        </form>
        <section className="searcher__results">
            {locations.map(element => <Location key={element.id} infoLocation={element} setPrincipalData={setPrincipalData} setSection={setSection} setIsDayOrNight={setIsDayOrNight} dayOrNightLocation={dayOrNightLocation}/>)}
        </section>
    </main>
  )
}

export default SearchLocation
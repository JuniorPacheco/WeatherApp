import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Principal from './components/Principal'
import { fechaActual } from './helpers/index.js'
import SearchLocation from './components/SearchLocation'
import MoreInformation from './components/MoreInformation'
import Spinner from './components/Spinner'
import imageAndColor from './img/imagenes.js'
import axios from 'axios'

function App() {
  const [coords, setCoords] = useState({}); 
  const [principalData, setPrincipalData] = useState({});
  const [isDayOrNight, setIsDayOrNight] = useState(true);
  const [section, setSection] = useState('principal');
  const [loading, setLoading] = useState(true);

  const dayOrNight = (dt, sunrise, sunset) => {
    if(dt >= sunrise && dt <= sunset){
      setIsDayOrNight(true);
      return true;
    }else{
      setIsDayOrNight(false);
      return false;
    }
  }

  const locationFirstTime = () => {
    const succes = pos => {
      const { latitude, longitude } = pos.coords;
      setCoords({latitude, longitude})
    }
    navigator.geolocation.getCurrentPosition(succes);
  }

  useEffect(() => {
    locationFirstTime();
  }, [])

  useEffect(() => {
    if(Object.keys(coords).length > 0){
      const API_KEY = 'f4242e9427fbc4148e47904dfd242342'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`
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
        const resultDayOrNight = dayOrNight(datosPrimordiales.dt, datosPrimordiales.sunrise, datosPrimordiales.sunset);
        console.log(datosPrimordiales.dt, datosPrimordiales.sunrise, datosPrimordiales.sunset)
        datosPrimordiales.color = imageAndColor(resultDayOrNight, datosPrimordiales.idDescription).color;
        datosPrimordiales.image = imageAndColor(resultDayOrNight, datosPrimordiales.idDescription).image;
        setPrincipalData(datosPrimordiales);
      })
      .catch(error => {
        setLoading(false);
        console.log(error)
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      })
    }
  }, [coords])

  return (
    <div 
    style={isDayOrNight ? 
      {backgroundColor: '#fff', 
      borderColor: '#a3b4d5', 
      color: '#000'} 
    : 
      {backgroundColor: '#141c2c', 
      borderColor: '#000', 
      color: '#FFF'}} 
    className={`weatherApp ${loading ? 'initiation' : '' }`}
    >
      {loading ? <Spinner /> : 
      <>
        {section === 'principal' ? 
          <Principal 
          principalData={principalData} 
          isDayOrNight={isDayOrNight}
          /> 
        : 
          section === 'searcher' ? 
            <SearchLocation 
            setPrincipalData={setPrincipalData} 
            setSection={setSection} 
            isDayOrNight={isDayOrNight} 
            setIsDayOrNight={setIsDayOrNight}
            /> 
          : 
            <MoreInformation 
            principalData={principalData}
        />}  
        <nav className='navbar'>
          <NavBar 
          principalData={principalData} 
          setPrincipalData={setPrincipalData} 
          setSection={setSection}
          />
        </nav>
      </>
      }
    </div>
  )
}

export default App

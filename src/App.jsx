import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Principal from './components/Principal'
import { fechaActual } from './helpers/index.js'
import imageAndColor from './img/imagenes.js'
import axios from 'axios'

function App() {
  const [coords, setCoords] = useState({}); 
  const [principalData, setPrincipalData] = useState({});
  const [isDayOrNight, setIsDayOrNight] = useState(true);

  useEffect(() => {
    const locationFirstTime = () => {
      const succes = pos => {
        const { latitude, longitude } = pos.coords;
        setCoords({latitude, longitude})
      }
      navigator.geolocation.getCurrentPosition(succes);
    }
    locationFirstTime();
  }, [])

  const dayOrNight = () => {
    const completeDate = new Date();
    const hours = completeDate.getHours();
    if(hours >= 6 && hours <= 17){
      setIsDayOrNight(true);
      return true;
    }else{
      setIsDayOrNight(false);
      return false;
    }
  }
  
  useEffect(() => {
    if(Object.keys(coords).length > 0){
      const API_KEY = 'c9ecc447d01d56716d7833b61b762824'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`
      axios.get(url)
      .then(res => {
        const datosPrimordiales = {
          location: `${res.data?.name}, ${res.data?.sys?.country}`,
          fecha: fechaActual(),
          id: res.data.id,
          temperature: `${res.data?.main?.temp}°K`,
          feelsLike: res.data?.main?.feels_like,
          idDescription: res.data?.weather[0]?.id,
          sunDay: dayOrNight(),
          weatherDescription: `${res.data.weather[0].main}, ${res.data.weather[0].description}`
        }
        datosPrimordiales.color = imageAndColor(datosPrimordiales.sunDay, datosPrimordiales.idDescription).color;
        datosPrimordiales.image = imageAndColor(datosPrimordiales.sunDay, datosPrimordiales.idDescription).image;
        dayOrNight();
        setPrincipalData(datosPrimordiales);
      })
      .catch(error => console.log(error))
    }
  }, [coords])

  return (
    <div 
    style={isDayOrNight ? 
    {backgroundColor: '#fff', borderColor: '#a3b4d5', color: '#000'} : 
    {backgroundColor: '#141c2c', borderColor: '#000', color: '#FFF'}} 
    className="weatherApp">
        <Principal principalData={principalData} isDayOrNight={isDayOrNight}/>
      <nav className='navbar'>
        <NavBar principalData={principalData} setPrincipalData={setPrincipalData}/>
      </nav>
    </div>
  )
}

export default App

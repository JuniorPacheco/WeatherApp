const MoreInformation = ({principalData}) => {
  return (
    <main className="moreInformation">
        <p>More Information</p>
        <article className="moreInformation__body">    
            <p><i className='bx bxs-cloud' ></i> Clouds: {principalData.clouds} %</p>
            <p><i className='bx bxs-droplet-half'></i> Humidity: {principalData.humidity} %</p>
            <p><i className='bx bxs-thermometer'></i> Pressure: {principalData.pressure} hPa</p>
            <p><i className='bx bxs-sun'></i> Thermal Sensation: {principalData.feelsLike}</p>
            <p><i className='bx bxl-tailwind-css'></i> Wind Speed: {principalData.windSpeed} meter/sec</p>
        </article>
    </main>
  )
}

export default MoreInformation
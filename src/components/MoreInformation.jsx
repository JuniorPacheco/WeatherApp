const MoreInformation = ({principalData}) => {
  return (
    <main className="moreInformation">
        <p>More Information</p>
        <article className="moreInformation__body">    
            <p><i class='bx bxs-cloud' ></i> Clouds: {principalData.clouds} %</p>
            <p><i class='bx bxs-droplet-half'></i> Humidity: {principalData.humidity} %</p>
            <p><i class='bx bxs-thermometer'></i> Pressure: {principalData.pressure} hPa</p>
            <p><i class='bx bxs-sun'></i> Thermal Sensation: {principalData.feelsLike}</p>
            <p><i class='bx bxl-tailwind-css'></i> Wind Speed: {principalData.windSpeed} meter/sec</p>
        </article>
    </main>
  )
}

export default MoreInformation
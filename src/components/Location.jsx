const Location = ({infoLocation, setPrincipalData, setSection, setIsDayOrNight, dayOrNightLocation }) => {

    const handleSendLocation = () => {
        setIsDayOrNight(dayOrNightLocation(infoLocation.dt, infoLocation.sunrise, infoLocation.sunset));
        setPrincipalData(infoLocation);
        setSection('principal');
    }
  return (
    <article onClick={handleSendLocation} className="searcher__location">
        <p>{infoLocation.location}</p>
        <i className='bx bx-current-location'></i>
    </article>
  )
}

export default Location